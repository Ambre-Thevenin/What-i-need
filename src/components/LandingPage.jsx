import React, { useState } from 'react';
import CurrentDate from './Date';
import StartAstroPage from './ModuleSparkle';
import StartMeteoPage from './ModuleMeteo';
import StartShopsPage from './ModuleShops';
import StartSNCFPage from './ModuleSNCF';
import AdressSearch from './AdressSearch';
import Nav from './Nav';

import styles from './LandingPage.module.css';

function LandingPage() {
  const [destinationData, setDestinationData] = useState(localStorage.getItem('destination'));
  const [originData, setOriginData] = useState(localStorage.getItem('origin'));
  const [userCity, setUserCity] = useState(localStorage.getItem('city'));

  function handleOrigin(adress) {
    setOriginData(adress);
  }

  function handleDestination(adress) {
    setDestinationData(adress);
    setUserCity(adress.locality);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('origin', JSON.stringify(originData));
    localStorage.setItem('destination', JSON.stringify(destinationData));
    localStorage.setItem('city', userCity);
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Nav />
      </header>

      <div className={styles.welcome}>
        <CurrentDate />
      </div>
      <div className={styles.input}>
        <AdressSearch origin={handleOrigin} destination={handleDestination} handleSubmit={handleSubmit} />
      </div>

      <div className={styles.cards}>
        <StartSNCFPage />

        <StartMeteoPage destination={destinationData} city={userCity} />

        <StartShopsPage />

        <StartAstroPage />
      </div>
    </main>
  );
}

export default LandingPage;
