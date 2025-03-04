import React from 'react';
import { Link } from 'react-router-dom';
import pp from "../assets/ppz.png"
import './Hero.css'

function Hero() {

  return (<>
    <div className='hero-wrapper bg-main'>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link to={'/about-me'} className='nav__link'>About me</Link>
          </li>
          <li className='nav__item'>
            <Link to={'#'} className='nav__link'>Projects</Link>
          </li>
          <li className='nav__item'>
            <Link to={'#'} className='nav__link'>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className='hero'>
        <div className="hero__info">
          <h1 className="Hero-intro typing">Hello, I'm</h1>
          <h2 className="Hero-name typing delay-1">Josef Nathan Sogradiel</h2>
          <h3 className='title typing delay-2'>A Student and a Developer</h3>
        </div>
        <div className='hero__img-wrapper'>
          <img src={pp} alt="Josef profile picture" />
        </div>
      </div>
    </div>
  </>);
}
export default Hero;