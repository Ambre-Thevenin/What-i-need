/* eslint-disable react/jsx-key */
import React from 'react';

function ShopsDetails({ shopsArray }) {
  const shopsResults = shopsArray.map((element) => {
    return (
      <div>
        <div>Supermarché : {element.name}</div>
        <div> Adresse : {element.address} </div>
      </div>
    );
  });
  {
    return shopsResults;
  }
}
export default ShopsDetails;
