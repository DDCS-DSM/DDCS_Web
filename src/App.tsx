import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";

import { Home, Privacy, Enlist, List, Accept } from "./pages";

import GlobalStyle from "./styles";
import Title from "./components/Title";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginModal from "./components/Modals/LoginModal";
import PolicyModal from "./components/Modals/PolicyModal";
import RegisterModal from "./components/Modals/RegisterModal";

axios.defaults.baseURL = "";

function App() {
  const [loginState, setLoginState] = useState<boolean>(false);
  const [loginVisible, setLoginVisible] = useState<boolean>(false);
  const [policyVisible, setPolicyVisible] = useState<boolean>(false);
  const [registerVisible, setRegisterVisible] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <GlobalStyle />
      {loginVisible && (
        <LoginModal
          setLoginVisible={setLoginVisible}
          setLoginState={setLoginState}
          setPolicyVisible={setPolicyVisible}
        />
      )}
      {policyVisible && (
        <PolicyModal
          setLoginVisible={setLoginVisible}
          setPolicyVisible={setPolicyVisible}
          setRegisterVisible={setRegisterVisible}
        />
      )}
      {registerVisible && (
        <RegisterModal
          setLoginVisible={setLoginVisible}
          setPolicyVisible={setPolicyVisible}
          setRegisterVisible={setRegisterVisible}
        />
      )}
      <Header loginState={loginState} setLoginVisible={setLoginVisible} />
      <Title />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/list" element={<List />} />
        <Route path="/enlist" element={<Enlist />} />
        <Route path="/accept" element={<Accept />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
