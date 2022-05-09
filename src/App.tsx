import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Home from "./pages/Home";
import PackageList from "./pages/List/Package";
import Privacy from "./pages/Privacy";
import GlobalStyle from "./styles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
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
