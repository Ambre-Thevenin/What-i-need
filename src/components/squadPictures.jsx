import React from 'react';
import styles from './about.module.css';
import citrouille from './assets/citrouille.png';
import citrouilleMan from './assets/citrouilleMan.png';
import epouvantail from './assets/epouvantail.png';
import witch from './assets/witch.png';

function WinSquad() {
  return (
    <div className={styles.squad}>
      <h2>WIN SQUAD</h2>
      <div className={styles.pictures}>
        <img className={styles.membersPictures} src={citrouille} alt="citrouille" />
        <img className={styles.membersPictures} src={citrouilleMan} alt="citrouilleMan" />
      </div>
      <div className={styles.pictures}>
        <img className={styles.membersPictures} src={epouvantail} alt="epouvantail" />
        <img className={styles.membersPictures} src={witch} alt="sorcière" />
      </div>
    </div>
  );
}

export default WinSquad;
