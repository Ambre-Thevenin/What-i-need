/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import RandomJokes from './jokes';
import sparkles_icon from './assets/sparkles_icon.png';

import styles from './LandingPage.module.css';

function StartAstroPage() {
  const [astroPage, setAstroPage] = useState('collapsed');

  if (astroPage === 'collapsed') {
    return (
      <div className={styles.card}>
        <img src={sparkles_icon} alt="sparkle icon" role="button" className={styles.sparkleCard} onClick={() => setAstroPage('opened')} />
      </div>
    );
  } else {
    return (
      <div className={styles.mainCard}>
        <button onClick={() => setAstroPage('collapsed')}>X</button>
        <p> DES MESSAGES OU UNE FARCE</p>
        <RandomJokes />
      </div>
    );
  }
}

export default StartAstroPage;
