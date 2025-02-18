//import pp from "./assets/ppz.png"
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from './page/Hero.jsx';       // Import Hero component
import AboutMe from './page/AboutMe.jsx'; // Import AboutMe component (create if not existing)
import './page/Hero.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;