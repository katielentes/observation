import React from 'react';

const ObservationIndex = (observationData) => {
  const observation = observationData.location.state.observationData;
  return (
    <>
      <div className>{observation.species_guess}</div>
      <div className>{observation.latitude}</div>
      <div className>{observation.longitude}</div>
      <div className>{observation.observed_on_string}</div>
    </>
  );
};

export default ObservationIndex;
