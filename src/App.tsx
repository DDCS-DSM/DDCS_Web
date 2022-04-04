import React from "react";
import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/App";
import Header from "./components/Header";

import * as P from "./pages/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<P.Home />} />
      </Routes>
    </>
  );
}

export default App;
