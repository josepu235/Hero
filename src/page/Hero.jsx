import React from 'react';
import { Link } from 'react-router-dom';
import pp from "../assets/ppz.png"
import './Hero.css'

function Hero() {

  return (
    
    <div>
      <nav id="desktop-nav">
      <div>
        <ul class="nav-links">
        <li><Link to="/about-me">About Me</Link></li>
          <li><Link to="#projects">Projects</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
      <section className="Hero-prof">
        <div className="Hero-pic">
          <img src={pp} alt="Josef profile picture" />
        </div>
        <div className="Hero-text">
          <h2 className="Hero-intro">Hello, I'm</h2>
          <h1 className="Hero-name">Josef Nathan Sogradiel</h1>
          <h1 className='title'>A Student and a Developer</h1>

        </div>
      </section>
    </div>
  );
}

export default Hero;