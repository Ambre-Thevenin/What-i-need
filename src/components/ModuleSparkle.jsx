/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import RandomJokes from './jokes';
import sparkles_icon from './assets/sparkles_icon.png';

import styles from './LandingPage.module.css';

function StartAstroPage() {
  const [astroPage, setAstroPage] = useState('isHidden');

  if (astroPage === 'isHidden') {
    return (
      <div className={styles.card}>
        <img src={sparkles_icon} alt="sparkle icon" role="button" className={styles.imgCard} onClick={() => setAstroPage('!isHidden')} />
      </div>
    );
  } else {
    return (
      <div className={styles.mainCard}>
        <button onClick={() => setAstroPage('isHidden')}>X</button>
        <p> DES MESSAGES OU UNE FARCE</p>
        <RandomJokes />
      </div>
    );
  }
}

export default StartAstroPage;
