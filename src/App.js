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
        <Route path='/' Component={Home} Exact/>
        <Route path='/about' Component={About} Exact/>
        <Route path='/contact' Component={Contact} Exact/>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}export default App;
