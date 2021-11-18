/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import RandomJokes from './jokes';
import sparkle_glitter from './assets/sparkle_glitter.png';

import styles from './LandingPage.module.css';

function StartAstroPage() {
  const [astroPage, setAstroPage] = useState('collapsed');

  if (astroPage === 'isHidden') {
    return (
      <div className={styles.card}>
        <img src={sparkle_glitter} alt="sparkle icon" role="button" className={styles.sparkleCard} onClick={() => setAstroPage('opened')} />
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
