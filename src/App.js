import React from 'react'
import { 
  Routes, 
  Route,
  useLocation
} from "react-router-dom";

import './assets/css/index.css';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/home';
import LogIn from '././pages/auth/login';

function App() {

  const { pathname } = useLocation();
  const navbarValidation = pathname === '/' ? <Navbar /> : null;

  return (
    <div className="App">
      {navbarValidation}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
