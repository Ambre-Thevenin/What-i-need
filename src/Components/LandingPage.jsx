import React, { useState } from 'react';
import CurrentDate from './Date';
import StartAstroPage from './ModuleAstro';
import StartMeteoPage from './ModuleMeteo';
import StartShopsPage from './ModuleShops';
import StartSNCFPage from './ModuleSNCF';
import AdressSearch from './AdressSearch';
import Nav from '../components/Nav';

import styles from './LandingPage.module.css';

function LandingPage() {
  const [destinationData, setDestinationData] = useState();
  const [originData, setOriginData] = useState();

  function handleOrigin(adress) {
    setOriginData(adress);
  }

  function handleDestination(adress) {
    setDestinationData(adress);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('origin', originData);
    localStorage.setItem('destination', destinationData);
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Nav />
      </header>

      <div className={styles.surprise}>Surprise</div>
      <div className={styles.welcome}>
        <CurrentDate />
      </div>
      <div className={styles.input}>
        <AdressSearch origin={handleOrigin} destination={handleDestination} handleSubmit={handleSubmit} />
      </div>

      <div className={styles.cards}>
        <StartSNCFPage />

        <StartMeteoPage />

        <StartShopsPage />

        <StartAstroPage />
      </div>
    </main>
  );
}

export default LandingPage;
