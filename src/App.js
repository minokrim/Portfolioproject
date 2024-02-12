import './App.css';
import React from 'react';
import Home from './home.js';
import About from './about.js';
import Contact from './contact.js';
import {Route,Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} Exact/>
        <Route path='/about' element={<About/>}Exact/>
        <Route path='/contact'element={<Contact/>} Exact/>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}export default App;
