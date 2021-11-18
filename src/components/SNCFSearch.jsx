import React, { useState } from 'react';
import axios from 'axios';
import Journey from './Journey';
import styles from './LandingPage.module.css';
//require('dotenv').config();

function SNCFSearch({ departureLatitude, departureLongitude, arrivalLatitude, arrivalLongitude }) {
  const [SNCFfind, setSNCFfind] = useState();
  const getJourney = () => {
    axios
      .get(
        //`https://api.navitia.io/v1/coverage/sncf/journeys?from=stop_area%3ASNCF%3A87986505&to=stop_area%3ASNCF%3A87382499&key=${process.env.TOKENKEY_SNCF}`,
        `https://api.navitia.io/v1/coverage/sncf/journeys?from=${departureLongitude}%3B${departureLatitude}&to=${arrivalLongitude}%3B${arrivalLatitude}&max_duration_to_pt=50000&key=33c6537e-59dc-429c-af63-ce45208739c6`,
      )

      .then((res) => setSNCFfind(res.data.journeys[0]));
  };
  return (
    <div>
      <button className={styles.exitButton} onClick={getJourney}>
        Voir itinéraire
      </button>
      {SNCFfind && (
        <Journey
          journeyTime={Math.ceil(SNCFfind.duration / 60)}
          walkingDistance={SNCFfind.distances.walking}
          walkingTime={Math.ceil(SNCFfind.durations.walking / 60)}
          section={SNCFfind.sections}
        />
      )}
    </div>
  );
}

export default SNCFSearch;
