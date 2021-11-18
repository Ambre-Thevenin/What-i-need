import React from 'react';

import styles from './ShopsDetail.module.css';

function ShopsDetails({ shopsArray }) {
  const shopsResults = shopsArray.map((element) => {
    if (element.properties.opening_hours) {
      return (
        <div className={styles.shops}>
          <div>Supermarché : {element.name}</div>
          <div> Adresse : {element.address.label} </div>
          <div> Horaires : {element.properties.opening_hours}</div>
        </div>
      );
    } else {
      return (
        <div className={styles.shops}>
          <div>Supermarché : {element.name}</div>
          <div> Adresse : {element.address.label} </div>
          <div> Horaires : indisponibles </div>
        </div>
      );
    }
  });
  {
    return shopsResults;
  }
}
export default ShopsDetails;
