import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AdressSearch.module.css';

const api_geo = 'ba8deb2152e71c554c801f9aecc3805b';
//http://api.positionstack.com/v1/forward?access_key=ba8deb2152e71c554c801f9aecc3805b&query=44%20Rue%20Alphonse%20Penaud%207520%20Paris&limit=10&output=json&country=FR

function AdressSearch({ origin, destination, handleSubmit }) {
  const [firstQuery, setFirstQuery] = useState('');
  const [secondQuery, setSecondQuery] = useState('');

  useEffect(() => {
    axios
      .get(`http://api.positionstack.com/v1/forward?access_key=${api_geo}&query=${firstQuery}&limit=10&output=json&country=FR`)
      .then((res) => res.data)
      .then((data) => {
        origin(data.data[0]);
      });
  }, [firstQuery]);

  useEffect(() => {
    axios
      .get(`http://api.positionstack.com/v1/forward?access_key=${api_geo}&query=${secondQuery}&limit=10&output=json&country=FR`)
      .then((res) => res.data)
      .then((data) => {
        destination(data.data[0]);
      });
  }, [secondQuery]);

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
        <input type="button" onClick={(e) => handleSubmit(e)} value="Rechercher" className={styles.AdressSearchButton} />
      </form>
    </div>
  );
}

export default AdressSearch;
