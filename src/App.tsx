import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from 'axios';

import { Home, Privacy, Enlist, List, Accept } from './pages';

import Header from "./components/Header";
import GlobalStyle from "./styles";
import Title from "./components/Title";
import Footer from "./components/Footer";

axios.defaults.baseURL = "";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Title />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/list" element={<List />} />
        <Route path="/enlist" element={<Enlist />} />
        <Route path="/accept" element={<Accept />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
