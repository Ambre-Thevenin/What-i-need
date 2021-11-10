import React from 'react';

function Journey({ journeyTime, walkingDistance, walkingTime, journeyNetwork, journeyNetworkName, departureStation, direction, arrivalStation }) {
  return (
    <div>
      <div>Temps total du parcours : {journeyTime} min </div>
      <div>dont temps de marche: {walkingTime} min </div>
      <div> Distance de marche : {walkingDistance} mètres</div>
      <div>
        <h1>Itinéraire : </h1>
        <div>depuis : {departureStation}</div>
        <div>
          ligne : {journeyNetwork} {journeyNetworkName}
        </div>
        <div>en direction de : {direction} </div>
        <div>descendre à : {arrivalStation}</div>
      </div>
    </div>
  );
}

export default Journey;
