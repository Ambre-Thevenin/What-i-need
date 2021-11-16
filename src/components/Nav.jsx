import React, { useState } from 'react';

import logo_WIN from './logo_WIN.png';

import './Nav.css';

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'} `}>
      <img className="nav_logo" src={logo_WIN} alt="Hello" />
      <ul className="navbar_links">
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Accueil
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Carte
          </a>
        </li>
        <li className="navbar_item">
          <a href="/Meteo" className="navbar_link">
            Meteo
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Shops
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Surprise
          </a>
        </li>
        <li className="navbar_item">
          <a href="/About" className="navbar_link">
            About
          </a>
        </li>
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-nav"></span>
      </button>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-plus"></span>
      </button>
    </nav>
  );
}

export default Nav;
