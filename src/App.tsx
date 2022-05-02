import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
