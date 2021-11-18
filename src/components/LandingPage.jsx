import React, { useState, useEffect } from 'react';
import CurrentDate from './Date';
import StartAstroPage from './ModuleSparkle';
import StartMeteoPage from './ModuleMeteo';
import StartShopsPage from './ModuleShops';
import StartSNCFPage from './ModuleSNCF';
import AdressSearch from './AdressSearch';
import styles from './LandingPage.module.css';

function LandingPage() {
  const [destinationData, setDestinationData] = useState(localStorage.getItem('destination'));
  const [originData, setOriginData] = useState(localStorage.getItem('origin'));
  const [userCity, setUserCity] = useState('Paris');
  // const [query, setQuery] = useState(false);
  useEffect(() => {
    localStorage.setItem('origin', JSON.stringify(originData));
    localStorage.setItem('destination', JSON.stringify(destinationData));
    localStorage.setItem('city', userCity);
  }, [originData, destinationData]);

  function handleOrigin(adress) {
    setOriginData(adress);
  }

  function handleDestination(adress) {
    setDestinationData(adress);
    setUserCity(adress.address.city || adress.address.municipality);
  }

  return (
    <main className={styles.main}>
      <div className={styles.welcome}>
        <CurrentDate />
      </div>
      <div className={styles.input}>
        <AdressSearch origin={handleOrigin} destination={handleDestination} />
      </div>

      <div className={styles.cards}>
        {originData && destinationData && (
          <StartSNCFPage
            departureLatitude={originData.lat}
            departureLongitude={originData.lon}
            arrivalLatitude={destinationData.lat}
            arrivalLongitude={destinationData.lon}
          />
        )}
        <StartMeteoPage destination={destinationData} city={userCity} />

        {originData && destinationData && <StartShopsPage arrivalLatitude={destinationData.lat} arrivalLongitude={destinationData.lon} />}

        <StartAstroPage />
      </div>
    </main>
  );
}

export default LandingPage;
