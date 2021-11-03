import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './AdressSearch.module.css';

const api_geo = 'ba8deb2152e71c554c801f9aecc3805b';

function AdressSearch() {
  const [originData, setOriginData] = useState();
  const [firstQuery, setFirstQuery] = useState('');
  const [secondQuery, setSecondQuery] = useState('');
  const [destinationData, setDestinationData] = useState();

  useEffect(() => {
    axios
      .get(`http://api.positionstack.com/v1/forward?access_key=${api_geo}&query=${firstQuery}&limit=10&output=json&country=FR`)
      .then((res) => res.data)
      .then((data) => {
        setOriginData(data.data[0]);
      });
  }, [firstQuery]);

  useEffect(() => {
    axios
      .get(`http://api.positionstack.com/v1/forward?access_key=${api_geo}&query=${secondQuery}&limit=10&output=json&country=FR`)
      .then((res) => res.data)
      .then((data) => {
        setDestinationData(data.data[0]);
      });
  }, [secondQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('origin', originData);
    localStorage.setItem('destination', destinationData);
  };

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
        <input type="button" onClick={(e) => handleSubmit(e)} value="Rechercher" />
      </form>
    </div>
  );
}

export default AdressSearch;
