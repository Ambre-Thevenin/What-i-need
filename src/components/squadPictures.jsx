import React from 'react';
import person_1 from './assets/person_1.jpg';
import person_2 from './assets/person_2.jpg';
import person_3 from './assets/person_3.jpg';
import person_4 from './assets/person_4.jpg';
import styles from './about.module.css';

function WinSquad() {
  return (
    <div className="Nav">
      <div className={styles.squad}>
        <h1>À propos de nous</h1>
        <h2>WIN SQUAD</h2>
        <div className={styles.pictures}>
          <img className={styles.membersPictures} src={person_1} alt="squad member one" />
          <img className={styles.membersPictures} src={person_2} alt="squad member two" />
        </div>
        <div className={styles.pictures}>
          <img className={styles.membersPictures} src={person_3} alt="squad member three" />
          <img className={styles.membersPictures} src={person_4} alt="squad member four" />
        </div>
      </div>
    </div>
  );
}

export default WinSquad;
