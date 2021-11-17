import React from 'react';
import Itinerary from './Itinerary';

function Journey({ journeyTime, walkingDistance, walkingTime, section }) {
  return (
    <div>
      <div>Temps total du parcours : {journeyTime} min </div>
      <div>dont temps de marche: {walkingTime} min </div>
      <div> Distance de marche : {walkingDistance} mètres</div>
      <div>Itinéraire : </div>
      <div>
        <Itinerary section={section} />
      </div>
    </div>
  );
}

export default Journey;
