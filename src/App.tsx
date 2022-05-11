import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import Home from "./pages/Home";
import PackageList from "./pages/List/Package";
import Privacy from "./pages/Privacy";
import GlobalStyle from "./styles";

function App() {
  const [loginState, setLoginState] = useState<boolean>(false);
  const [loginVisible, setLoginVisible] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <GlobalStyle />
      {loginVisible && (
        <LoginModal
          setLoginVisible={setLoginVisible}
          setLoginState={setLoginState}
        />
      )}
      <Header loginState={loginState} setLoginVisible={setLoginVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/list" element={<PackageList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
