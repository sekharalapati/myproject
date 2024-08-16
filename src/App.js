import React from 'react';
import './App.css';
import './style.css';
// import LoginForm from './login/LoginForm.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home.js';
import About from './Components/About.js';
import Courses from './Courses/Courses.js';
import Navbar from './Components/Navbar.js';
import RCA from './Courses/RCA.js';


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/courses"  element={<Courses/>} />
          <Route path="/courses/rca"  element={<RCA/>} />
        </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;

