import React from 'react';
import logo from './logo_WIN.png';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.headerItems}>
      <img className={styles.logo} src={logo} alt="logo" />
    </div>
  );
}

export default Header;
