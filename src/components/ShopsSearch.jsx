import React, { useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import Journey from './Journey';

function ShopsSearch() {
  // eslint-disable-next-line no-unused-vars
  const [Shopsfind, setShopsfind] = useState();
  const getShops = () => {
    axios
      .get(
        'https://api.navitia.io/v1/coverage/sncf/journeys?from=stop_area%3ASNCF%3A87986505&to=stop_area%3ASNCF%3A87382499&key=33c6537e-59dc-429c-af63-ce45208739c6',
      )
      .then((res) => setShopsfind(res));
  };
  return (
    <div>
      <button onClick={getShops}> get journey </button>
    </div>
  );
}

export default ShopsSearch;
