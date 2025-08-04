import './App.css';
import React from 'react';
import Home from './home.js';
import About from './about.js';
import Contact from './contact.js';
import Works from './works/works.jsx';
import Content from './content/content.jsx';
import {Route,Routes, HashRouter } from 'react-router-dom';
import Works2 from './works/works2.jsx';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/About' element={<About/>}exact/>
        <Route path='/Contact'element={<Contact/>} Exact/>
        <Route path='/Works'element={<Works2/>} Exact/>
        <Route path='/content'element={<Content/>} Exact/>
      </Routes>
      </HashRouter>
    </div>
    
  );
}export default App;
