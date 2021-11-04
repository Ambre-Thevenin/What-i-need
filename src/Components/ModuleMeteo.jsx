/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import styles from './LandingPage.module.css';

function StartMeteoPage() {
  const [meteoPage, setMeteoPage] = useState('isHidden');

  if (meteoPage === 'isHidden') {
    return (
      <div className={styles.card}>
        <img
          src="https://www.radars-auto.com/carte-radar/carte-france-index.png"
          role="button"
          alt="cardMeteo"
          className={styles.imgCard}
          onClick={() => setMeteoPage('!isHidden')}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.mainCard}>
        <button onClick={() => setMeteoPage('isHidden')}>Exit</button>
        <p> TEST SPECIAL METEO</p>{' '}
      </div>
    );
  }
}

export default StartMeteoPage;
