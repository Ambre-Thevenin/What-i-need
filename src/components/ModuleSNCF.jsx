/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import SNCFSearch from './SNCFSearch';
import SNCF_logo from './assets/SNCF_logo.svg';

import styles from './LandingPage.module.css';

function StartSNCFPage({ departureLatitude, departureLongitude, arrivalLatitude, arrivalLongitude }) {
  const [SNCFPage, setSNCFPage] = useState('collapsed', 'opened');
  if (SNCFPage === 'collapsed') {
    return (
      <div className={styles.card}>
        <img src={SNCF_logo} alt="SNCF icon" role="button" className={styles.sparkleCard} onClick={() => setSNCFPage('opened')} />
      </div>
    );
  } else {
    return (
      <div className={styles.mainCard}>
        <button onClick={() => setSNCFPage('collapsed')}>Exit</button>
        <SNCFSearch
          departureLatitude={departureLatitude}
          departureLongitude={departureLongitude}
          arrivalLatitude={arrivalLatitude}
          arrivalLongitude={arrivalLongitude}
        />
      </div>
    );
  }
}

export default StartSNCFPage;
