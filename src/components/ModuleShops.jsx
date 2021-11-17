/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import ShopsSearch from './ShopsSearch';
import shopping_logo from './assets/shopping_logo.png';

import styles from './LandingPage.module.css';

function StartShopsPage({ arrivalLatitude, arrivalLongitude }) {
  const [shopsPage, setShopsPage] = useState('collapsed', 'opened');

  if (shopsPage === 'collapsed') {
    return (
      <div className={styles.card}>
        <img src={shopping_logo} alt="Shops icon" role="button" className={styles.sparkleCard} onClick={() => setShopsPage('opened')} />
      </div>
    );
  } else {
    return (
      <div className={styles.mainCard}>
        <button onClick={() => setShopsPage('collapsed')}>Exit</button>
        <ShopsSearch arrivalLatitude={arrivalLatitude} arrivalLongitude={arrivalLongitude} />
      </div>
    );
  }
}

export default StartShopsPage;
