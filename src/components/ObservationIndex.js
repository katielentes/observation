import React from 'react';
import Map from './Map';

const ObservationIndex = (observationData) => {
  const observation = observationData.location.state.observationData;

  //TODO: make this cute, add back button
  return (
    <>
      <div>{observation.species_guess}</div>
      <div>{observation.latitude}</div>
      <div>{observation.longitude}</div>
      <div>{observation.observed_on_string}</div>
      <Map
        latitude={observation.latitude}
        longitude={observation.longitude}
        imageUrl={observation.photos[0].large_url}
      />
    </>
  );
};

export default ObservationIndex;
