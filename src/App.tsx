import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import { Home, Privacy, Enlist, List, Accept } from "./pages";

import GlobalStyle from "./styles";
import Title from "./components/Title";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginModal from "./components/Modals/LoginModal";
import PolicyModal from "./components/Modals/PolicyModal";
import RegisterModal from "./components/Modals/RegisterModal";
import ClaimModal from "./components/Modals/ClaimModal";
import FindIdModal from "./components/Modals/FindIdModal";
import FindPwModal from "./components/Modals/FindPwModal";

import cookie from 'react-cookies'
import userProps from "./userProps";

axios.defaults.baseURL = "http://3.34.216.253:8080";

function App() {
  const [loginState, setLoginState] = useState<boolean>(false);
  const [modalState, setModalState] = useState<string>("");
  const [user, setUser] = useState<userProps>({    
    name: "",
    accountId: "",
    email: "",
    studentNumber: 0,
    phoneNumber: ""
  });

  const navigate = useNavigate();
  const location = useLocation();

  //자동 로그인
  useEffect(() => {
    const accessToken = cookie.load("DCS_accessToken");
    const refreshToken = cookie.load("DCS_refreshToken");
    if(accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      axios.get("users/mypage")
        .then(res => {
          console.log(1);
          setLoginState(true);
          setUser(res.data);
        })
        .catch(err => {
          console.log(err.response.status);
          if(err.status === 401 && refreshToken){
            axios.patch("/users/token", 
            {accessToken: accessToken, refreshToken: refreshToken})
              .then(res => {
                setLoginState(true);
                cookie.save("DCS_accessToken", res.data.accessToken, { path: '/' });
                cookie.save("DCS_refreshToken", res.data.refreshToken, { path: '/' });

                axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;

                axios.get("users/mypage")
                  .then(res => setUser(res.data))
              })
          }
        })
    }
    if(user.studentNumber === 0 && location.pathname !== "/"){
      navigate("/");  
      alert("로그인을 먼저 해주십쇼.");
    }
  },[location.pathname, navigate, user.studentNumber])

  interface winProps extends globalThis.Window { 
    ReactNativeWebView?: {
      postMessage(msg: string): void; 
    }
  };

  useEffect(()=>{
    const win: winProps = window;
    if(user.studentNumber !== 0 && win.ReactNativeWebView) {
      win.ReactNativeWebView.postMessage(String(user.studentNumber));
    }
  },[user])

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  },[location.pathname])

  useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27) {
        setModalState("");
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [setModalState]);

  const nomalBodyCss = `      
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;`

  useEffect(()=>{
    if(modalState){
      document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
      ${nomalBodyCss}`;
    }
    else{
      document.body.style.cssText = nomalBodyCss;
    }
  },[modalState, nomalBodyCss])

  return (
    <>
      <GlobalStyle />
      {modalState === "login" && (
        <LoginModal
          setModalState={setModalState}
          setLoginState={setLoginState}
        />
      )}
      {modalState === "policy" && <PolicyModal setModalState={setModalState} />}
      {modalState === "register" && (
        <RegisterModal setModalState={setModalState} />
      )}
      {modalState === "claim" && <ClaimModal setModalState={setModalState} />}
      {modalState === "findid" && <FindIdModal setModalState={setModalState} />}
      {modalState === "findpw" && <FindPwModal setModalState={setModalState} />}
      <Header loginState={loginState} setModalState={setModalState} user={user}/>
      <Title />
      <Routes>
        <Route path="/" element={<Home setModalState={setModalState} />} />
        <Route path="/privacy" element={<Privacy user={user}/>}/>
        <Route path="/list" element={<List />} />
        <Route path="/enlist" element={<Enlist />} />
        <Route path="/accept" element={<Accept />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
