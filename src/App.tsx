import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import * as P from "./pages/index";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/signup" element={<P.SignUp />} />
        <Route path="/change_privacy" element={<P.ChangePrivacy />} />
        <Route path="/" element={<P.Home />} />
      </Routes>
    </>
  );
}

export default App;
