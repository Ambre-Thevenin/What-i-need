import React from 'react';

function Itinerary({ section }) {
  const newItinerary = section.map((step) => {
    if (step.type === 'crow_fly') {
      return (
        <div>
          <div>
            Marchez depuis : {step.from.name} jusque {step.to.name}
          </div>
          <div> -soit env. {Math.round(step.duration / 60)} min- </div>
        </div>
      );
    }
    if (step.type === 'public_transport') {
      return (
        <div>
          <div>
            Prenez le {step.display_informations.network} {step.display_informations.name} de {step.departure_date_time}
          </div>
          <div> en direction de {step.display_informations.direction} </div>
          <div> et descendez à {step.to.name}</div>
        </div>
      );
    }
    if (step.type === 'boarding') {
      return <div>Embarquement</div>;
    }
    if (step.type === 'waiting') {
      return <div>Patientez</div>;
    }
    if (step.type === 'transfer') {
      return <div>Correspondance</div>;
    }
  });
  {
    return newItinerary;
  }
}

export default Itinerary;
