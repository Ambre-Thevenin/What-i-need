import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo_WIN from './logo_WIN.png';

import styles from './Nav.module.css';

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className={styles.navbar}>
      <nav className={showLinks ? `${styles.show_nav}` : `${styles.hide_nav}`}>
        <div className={styles.container}>
          <div className={styles.logo_container}>
            <img className={styles.nav_logo} src={logo_WIN} alt="Hello" />
          </div>
          <div className={styles.menu_container}>
            <ul className={styles.navbar_links}>
              <li className={styles.navbar_item}>
                <NavLink to="/" className={styles.navbar_link}>
                  Accueil
                </NavLink>
              </li>
              <li className={styles.navbar_item}>
                <NavLink to="/about" className={styles.navbar_link}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <button className={styles.navbar_burger} onClick={handleShowLinks}>
              <span className={styles.burger_nav}></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
