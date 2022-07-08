import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import { Home, Privacy, Enlist, List, Accept, Developers } from "./pages";

import GlobalStyle from "./styles";
import Title from "./components/Title";
import Header from "./components/Header";
import Footer from "./components/Footer";
import * as M from "./components/Modals"

import cookie from 'react-cookies'
import userProps from "./userProps";

import accessCheck from "./accessCheck";

import axios from "axios";
axios.defaults.baseURL = "http://3.34.216.253:8080";


function App() {
  const [loginState, setLoginState] = useState<boolean>(false);
  const [modalState, setModalState] = useState<string>("");
  const [user, setUser] = useState<userProps>({    
    name: "",
    accountId: "",
    email: "",
    phoneNumber: "",
    teacher: false,
    courier: false
  });

  const navigate = useNavigate();
  const location = useLocation();

  interface winProps extends globalThis.Window { 
    ReactNativeWebView?: {
      postMessage(msg: string): void; 
    }
  };

      /*
      const win: winProps = window;
      if(win.ReactNativeWebView)
        win.ReactNativeWebView.postMessage(JSON.stringify({type: "phone", data: user.phoneNumber}));*/

  //자동 로그인
  useEffect(() => {
    const accessToken = cookie.load("DCS_accessToken");
    const refreshToken = cookie.load("DCS_refreshToken");
    if(accessToken) {
      axios.get("users/mypage", {headers:{Authorization: `Bearer ${accessToken}`}})
        .then(res => {
          setLoginState(true);
          setUser(res.data);
          const win: winProps = window;
          if(win.ReactNativeWebView)
            win.ReactNativeWebView.postMessage(JSON.stringify({type: "phone", data: user.phoneNumber}));
        })
        .catch(err => {
          console.log(err.response.status);
          if(err.response.status === 401){
            axios.patch("/users/token", 
            {accessToken: accessToken, refreshToken: refreshToken},
            {headers:{Authorization: ""}})
              .then(res => {
                setLoginState(true);
                cookie.save("DCS_accessToken", res.data.accessToken, { path: '/', maxAge: 30 });
                cookie.save("DCS_refreshToken", res.data.refreshToken, { path: '/', maxAge: 7*24*60 });

                axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
              })
          }
          else if(err.response.status === 404){
            axios.get("/admin/verification/teacher", {headers:{Authorization: `Bearer ${accessToken}`}})
              .then(res => setUser({...user, teacher: true}))
            axios.get("/admin/verification/courier", {headers:{Authorization: `Bearer ${accessToken}`}})
              .then(res => setUser({...user, courier: true}))
          }               
        })
    }
    //접근 권한 체크
    //accessCheck(user, location, navigate);
  },[location.pathname, navigate, user])

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

  //모달 상태일 시 스크롤 정지
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
        <M.LoginModal
          setModalState={setModalState}
          setLoginState={setLoginState}
        />
      )}
      {modalState === "policy" && <M.PolicyModal setModalState={setModalState} />}
      {modalState === "register" && (
        <M.RegisterModal setModalState={setModalState} />
      )}
      {modalState === "claim" && <M.ClaimModal setModalState={setModalState} />}
      {modalState === "findid" && <M.FindIdModal setModalState={setModalState} />}
      {modalState === "findpw" && <M.FindPwModal setModalState={setModalState} />}
      <Header loginState={loginState} setModalState={setModalState}/>
      <Title />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/privacy" element={<Privacy user={user}/>}/>
        <Route path="/enlist" element={<Enlist/>} />
        <Route path="/developers" element={<Developers/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
