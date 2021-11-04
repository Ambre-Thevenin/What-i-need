import React from 'react';
import styles from './LandingPage.module.css';
import CurrentDate from '../components/Date';
import AdressSearch from './Components/AdressSearch';

function LandingPage() {
  return (
    <body className={styles.body}>
      <header className={styles.header}> Mettre ici le Logo, le burger et le +</header>
      <main className={styles.main}>
        <div className={styles.surprise}>Surprise</div>
        <div className={styles.welcome}>
          <CurrentDate />
        </div>
        <div className={styles.input}>
          <AdressSearch />
        </div>

        <div className={styles.cards}>
          <img src="https://www.radars-auto.com/carte-radar/carte-france-index.png" alt="cardMap" className={styles.card} />

          <img src="https://www.radars-auto.com/carte-radar/carte-france-index.png" alt="cardMeteo" className={styles.card} />

          <img src="https://www.radars-auto.com/carte-radar/carte-france-index.png" alt="cardShops" className={styles.card} />

          <img src="https://www.radars-auto.com/carte-radar/carte-france-index.png" alt="cardAstro" className={styles.card} />
        </div>
      </main>
    </body>
  );
}

export default LandingPage;
