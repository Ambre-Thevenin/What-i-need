/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import RandomJokes from './jokes';

import styles from './LandingPage.module.css';

function StartAstroPage() {
  const [astroPage, setAstroPage] = useState('isHidden');

  if (astroPage === 'isHidden') {
    return (
      <div className={styles.card}>
        <img
          src="https://www.radars-auto.com/carte-radar/carte-france-index.png"
          role="button"
          alt="cardAstro"
          className={styles.imgCard}
          onClick={() => setAstroPage('!isHidden')}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.mainCard}>
        <button onClick={() => setAstroPage('isHidden')}>Exit</button>
        <p> TEST SPECIAL ASTRO</p>
        <RandomJokes />
      </div>
    );
  }
}

export default StartAstroPage;
