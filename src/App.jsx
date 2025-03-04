import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from './page/Hero.jsx';
import AboutMe from './page/AboutMe.jsx';

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