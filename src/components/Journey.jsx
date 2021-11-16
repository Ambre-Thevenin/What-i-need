import React from 'react';
import Itinerary from './Itinerary';

function Journey({
  journeyTime,
  walkingDistance,
  walkingTime,
  journeyNetwork,
  journeyNetworkName,
  departureStation,
  direction,
  arrivalStation,
  sectionType1,
  sectionType2,
  sectionType3,
  sectionType4,
  sectionType5,
  section1,
  section2,
  section3,
}) {
  return (
    <div>
      <div>Temps total du parcours : {journeyTime} min </div>
      <div>dont temps de marche: {walkingTime} min </div>
      <div> Distance de marche : {walkingDistance} mètres</div>
      <div>
        <Itinerary
          journeyNetwork={journeyNetwork}
          journeyNetworkName={journeyNetworkName}
          departureStation={departureStation}
          direction={direction}
          arrivalStation={arrivalStation}
          sectionType1={sectionType1}
          sectionType2={sectionType2}
          sectionType3={sectionType3}
          sectionType4={sectionType4}
          sectionType5={sectionType5}
          section1={section1}
          section2={section2}
          section3={section3}
        />
      </div>
    </div>
  );
}

export default Journey;
