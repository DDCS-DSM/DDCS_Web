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
import FindIdModal from "./components/Modals/FindModal/FindIdModal";
import FindPwModal from "./components/Modals/FindModal/FindPwModal";

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
      axios.defaults.headers.common['Authorization'] = `Barer ${accessToken}`;
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

                axios.defaults.headers.common['Authorization'] = `Barer ${res.data.accessToken}`;

                axios.get("users/mypage")
                  .then(res => setUser(res.data))
              })
          }
        })
    }
  },[])

  useEffect(() => {
    if(user.studentNumber === 0 && location.pathname !== "/"){
      navigate("/");  
      alert("로그인을 먼저 해주십쇼.");
    }
  },[location.pathname])

  const loginCheck = () => {
    if(user.studentNumber === 0){
      alert("로그인을 먼저 해주십쇼.");
      navigate("/");
    }
  }

  useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27) {
        setModalState("");
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [setModalState]);

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
