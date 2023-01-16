import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';
import Map from './Map';

const ObservationIndex = (observationData) => {
  const observation = observationData.location.state.observationData;

  return (
    <div style={{ width: '50vw' }}>
      <div className="is-flex py-3">
        <Link
          to={{
            pathname: `/`,
          }}
          className="column "
        >
          <button className="button is-success">
            <span className="icon is-small">
              <ArrowLeft />
            </span>
            <span>Go Back</span>
          </button>
        </Link>
        <div className="column ">
          <div className="has-text-weight-bold">Name:</div>
          <div className=" ">
            {observation.species_guess ||
              observation.taxon?.common_name?.name ||
              observation.taxon.name}
          </div>
        </div>
        <div className="column">
          <div className="has-text-weight-bold">Observed on:</div>
          <div className="">{observation.observed_on_string}</div>
        </div>
      </div>
      <Map
        latitude={observation.latitude}
        longitude={observation.longitude}
        imageUrl={observation.photos[0].large_url}
      />
    </div>
  );
};

export default ObservationIndex;
