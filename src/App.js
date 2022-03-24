import './App.css';
import { Route, Routes, useLocation} from 'react-router-dom';
import * as P from './pages'

function App() {

  const location = useLocation();

  return (
    <>
      <Routes location={location}>
        <Route exact path="/" element={<P.Home/>}/>
        <Route exact path="/login" element={<P.Login/>}/>
      </Routes>    
    </>
  );
}

export default App;
