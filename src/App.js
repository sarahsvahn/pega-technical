/* 
  
  App.js

  Pega Technical Challenge
  Sarah Svahn
  November 3rd & 4th 2023

*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Bugs from './components/Bugs';
import Epics from './components/Epics';
import Bug from './components/Bug';
import Epic from './components/Epic';
import UserStory from './components/UserStory';
import Navbar from './components/Navbar';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bugs" element={<Bugs />} />
            <Route path="/epics" element={<Epics />} />
            <Route path="/bug" element={<Bug />} />
            <Route path="/epic" element={<Epic />} />
            <Route path="/userstory" element={<UserStory />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
