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
      <div className="container">
        <div className="logo_container">
          <img className="nav_logo" src={logo_WIN} alt="Hello" />
        </div>
        <div className="menu_container">
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
              <a href="/" className="navbar_link">
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
              <a href="/about" className="navbar_link">
                Contact
              </a>
            </li>
          </ul>
          <button className="navbar_burger" onClick={handleShowLinks}>
            <span className="burger-nav"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
