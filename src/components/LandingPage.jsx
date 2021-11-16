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
  // eslint-disable-next-line no-console

  /*console.log(originData.latitude);
  console.log(originData.longitude);
  console.log(destinationData.latitude);
  console.log(destinationData.longitude);*/

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
        {originData && destinationData && (
          <StartSNCFPage
            departureLatitude={originData.latitude}
            departureLongitude={originData.longitude}
            arrivalLatitude={destinationData.latitude}
            arrivalLongitude={destinationData.longitude}
          />
        )}
        <StartMeteoPage />

        <StartShopsPage />

        <StartAstroPage />
      </div>
    </main>
  );
}

export default LandingPage;
