import React from 'react';

import CurrentDate from './Date';
import StartAstroPage from './ModuleAstro';
import StartMeteoPage from './ModuleMeteo';
import StartShopsPage from './ModuleShops';
import StartSNCFPage from './ModuleSNCF';
import AdressSearch from './AdressSearch';
import Nav from './Nav';

import styles from './LandingPage.module.css';

function LandingPage() {
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
        <AdressSearch />
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
