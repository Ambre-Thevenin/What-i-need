import React from 'react';
import styles from './LandingPage.module.css';
import CurrentDate from './Date';
import StartAstroPage from './ModuleAstro';
import StartMeteoPage from './ModuleMeteo';
import StartShopsPage from './ModuleShops';
import StartSNCFPage from './ModuleSNCF';
import AdressSearch from './AdressSearch';

function LandingPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}> Mettre ici le Logo, le burger et le +</header>

      <div className={styles.surprise}>Surprise</div>
      <div className={styles.welcome}>
        <CurrentDate />
      </div>
      <div className={styles.input}>
        {' '}
        <AdressSearch />{' '}
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
