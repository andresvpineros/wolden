import React from 'react'
import { Routes, Route } from "react-router-dom";

import './assets/css/index.css';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
