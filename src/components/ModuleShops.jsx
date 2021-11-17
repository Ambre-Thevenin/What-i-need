/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import ShopsSearch from './ShopsSearch';

import styles from './LandingPage.module.css';

function StartShopsPage({ arrivalLatitude, arrivalLongitude }) {
  const [shopsPage, setShopsPage] = useState('isHidden');

  if (shopsPage === 'isHidden') {
    return (
      <div className={styles.card}>
        <img
          src="https://www.radars-auto.com/carte-radar/carte-france-index.png"
          role="button"
          alt="cardShops"
          className={styles.imgCard}
          onClick={() => setShopsPage('!isHidden')}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.mainCard}>
        <button onClick={() => setShopsPage('isHidden')}>Exit</button>
        <ShopsSearch arrivalLatitude={arrivalLatitude} arrivalLongitude={arrivalLongitude} />
      </div>
    );
  }
}

export default StartShopsPage;
