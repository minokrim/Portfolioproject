import './App.css';
import React from 'react';
import Home from './home.js';
import About from './about.js';
import Contact from './contact.js';
import {Route,Routes, HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>} Exact/>
        <Route path='/about' element={<About/>}Exact/>
        <Route path='/contact'element={<Contact/>} Exact/>
      </Routes>
      </HashRouter>
    </div>
    
  );
}export default App;
