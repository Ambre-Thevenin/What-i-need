import React, { useState } from 'react';
import axios from 'axios';
import Journey from './Journey';

//UTILE API : const api_SNCF = '33c6537e-59dc-429c-af63-ce45208739c6';

function SNCFSearch() {
  // eslint-disable-next-line no-unused-vars
  const [SNCFfind, setSNCFfind] = useState();
  const getJourney = () => {
    axios
      .get(
        'https://api.navitia.io/v1/coverage/sncf/journeys?from=stop_area%3ASNCF%3A87986505&to=stop_area%3ASNCF%3A87382499&key=33c6537e-59dc-429c-af63-ce45208739c6',
      )
      .then((res) => setSNCFfind(res.data.journeys[0]));
    // eslint-disable-next-line no-console
    console.log(SNCFfind);
  };
  return (
    <div>
      <button onClick={getJourney}> get journey </button>
      {SNCFfind && (
        <Journey
          journeyTime={Math.ceil(SNCFfind.duration / 60)}
          walkingDistance={SNCFfind.distances.walking}
          walkingTime={Math.ceil(SNCFfind.durations.walking / 60)}
          journeyNetwork={SNCFfind.sections[1].display_informations.network}
          journeyNetworkName={SNCFfind.sections[1].display_informations.name}
          departureStation={SNCFfind.sections[1].from.name}
          direction={SNCFfind.sections[1].display_informations.direction}
          arrivalStation={SNCFfind.sections[1].to.stop_point.name}
        />
      )}
    </div>
  );
}

export default SNCFSearch;
