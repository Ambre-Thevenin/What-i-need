/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import MeteoForecast from './MeteoForecast';
import styles from './LandingPage.module.css';

function StartMeteoPage() {
  const [meteoPage, setMeteoPage] = useState('isHidden');
  const [weatherIcon, setWeatherIcon] = useState();

  if (meteoPage === 'isHidden') {
    return (
      <div className={styles.card}>
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
          role="button"
          alt="cardMeteo"
          className={styles.cardMeteo}
          onClick={() => setMeteoPage('!isHidden')}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.mainCard}>
        <button onClick={() => setMeteoPage('isHidden')}>Exit</button>
        <MeteoForecast setIcon={setWeatherIcon} icon={weatherIcon} />
      </div>
    );
  }
}

export default StartMeteoPage;
