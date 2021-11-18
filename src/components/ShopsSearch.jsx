import React, { useState } from 'react';
import axios from 'axios';
import ShopsDetails from './ShopsDetails';
import styles from './LandingPage.module.css';

function ShopsSearch({ arrivalLatitude, arrivalLongitude }) {
  const [Shopsfind, setShopsfind] = useState([]);
  const getShops = () => {
    axios
      .get(
        `https://api.navitia.io/v1/coverage/fr-idf/addresses/${arrivalLongitude}%3B${arrivalLatitude}/poi_types/poi_type%3Ashop%3Asupermarket/pois?distance=1000&key=c4978a47-6678-4403-bb27-363d03d40865`,
        //'https://api.navitia.io/v1/coverage/fr-idf/addresses/2.36764%3B48.85319/poi_types/poi_type%3Ashop%3Aclothes/pois?distance=300&key=c4978a47-6678-4403-bb27-363d03d40865',
      )
      .then((res) => setShopsfind(res.data.pois));
  };
  const shopsSlice = Shopsfind.slice(0, 5);

  return (
    <div>
      <button className={styles.exitButton} onClick={getShops}>
        Voir les supermarchés
      </button>
      {Shopsfind && <ShopsDetails shopsArray={shopsSlice} />}
    </div>
  );
}

export default ShopsSearch;
