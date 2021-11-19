import React, { useState } from 'react';
import axios from 'axios';

import styles from './AdressSearch.module.css';

function AdressSearch({ origin, destination }) {
  const [firstQuery, setFirstQuery] = useState('');
  const [secondQuery, setSecondQuery] = useState('');

  async function handleClick() {
    const originRes = await axios.get(`https://nominatim.openstreetmap.org/?addressdetails=1&q=${firstQuery}&format=json&limit=1`);
    const destinationRes = await axios.get(`https://nominatim.openstreetmap.org/?addressdetails=1&q=${secondQuery}&format=json&limit=1`);
    origin(originRes.data[0]);
    destination(destinationRes.data[0]);
  }

  return (
    <div>
      <form className={styles.AdressSearchForm}>
        <label htmlFor="origin">Adresse de départ</label>
        <input
          type="text"
          id="origin"
          value={firstQuery}
          onChange={(e) => setFirstQuery(e.target.value)}
          className={styles.AdressSearchInput}
          placeholder="N°, Rue, CP et ville"
        ></input>
        <label htmlFor="destination">Adresse de destination</label>
        <input
          type="text"
          id="destination"
          value={secondQuery}
          onChange={(e) => setSecondQuery(e.target.value)}
          className={styles.AdressSearchInput}
          placeholder="N°, Rue, CP et ville"
        ></input>
        <input type="button" onClick={() => handleClick()} value="Rechercher" className={styles.AdressSearchButton} />
      </form>
    </div>
  );
}

export default AdressSearch;
