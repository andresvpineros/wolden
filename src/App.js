import React from 'react'
import { Routes, Route } from "react-router-dom";

import './assets/css/index.css';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/home';
import LogIn from '././pages/auth/login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
