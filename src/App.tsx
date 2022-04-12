import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import * as P from "./pages/index";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/list/?:page" element={<P.List />} />
        <Route path="/confirm" element={<P.Confirm />}/>
        <Route path="/change_privacy" element={<P.ChangePrivacy />} />
        <Route path="/regist" element={<P.Regist />} />
        <Route path="/" element={<P.Home />} />
      </Routes>
    </>
  );
}

export default App;
