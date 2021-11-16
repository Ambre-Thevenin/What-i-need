/* eslint-disable no-unused-vars */
import React from 'react';

function Itinerary({
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
      <div>
        <div>Itinéraire : </div>
        {(section1.type = 'crow_fly') && (
          <div>
            <div>
              Marchez depuis : {section1.from.name} jusque {section1.to.name}
            </div>
            <div> -soit env. {Math.round(section1.duration / 60)} min- </div>
          </div>
        )}
        {(section1.type = 'public_transport') && (
          <div>
            <div>
              Prenez le {section1.display_informations.network} {section1.display_informations.name}
            </div>
            <div> en direction de {section1.display_informations.direction} </div>
            <div> et descendez à {section1.to.name}</div>
          </div>
        )}
        {(section1.type = 'boarding') && <div>Embarquement</div>}
        {(section1.type = 'waiting') && <div>Patientez</div>}
        {(section1.type = 'transfer') && <div>Transfert</div>}
      </div>
    </div>
  );
}

export default Itinerary;
