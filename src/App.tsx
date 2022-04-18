import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import GlobalStyle from "./styles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
