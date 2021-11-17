/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import SNCFSearch from './SNCFSearch';
import styles from './LandingPage.module.css';

function StartSNCFPage() {
  const [SNCFPage, setSNCFPage] = useState('collapsed');
  if (SNCFPage === 'collapsed') {
    return (
      <div className={styles.card}>
        <img
          src="https://www.radars-auto.com/carte-radar/carte-france-index.png"
          role="button"
          alt="cardSNCF"
          className={styles.imgCard}
          onClick={() => setSNCFPage('opened')}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.mainCard}>
        <button onClick={() => setSNCFPage('collapsed')}>Exit</button>

        <SNCFSearch />
      </div>
    );
  }
}

export default StartSNCFPage;
