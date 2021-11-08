import React from 'react';
// import logo from './logo_WIN.png';
import Nav from './Nav';
import styles from './Header.module.css';

function Header() {
  return (
    <div className="Nav">
      <header className={styles.header}>
        <Nav />
      </header>
      {/* <div className={styles.headerItems}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div> */}
    </div>
  );
}

export default Header;
