import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ObservationCard.css';
import photoUnavailable from '../assets/photoUnavailable.png';

const ObservationCard = (observation) => {
  return (
    <div
      className="tile is-child card p-2 is-flex is-flex-direction-column is-justify-content-space-evenly"
      id="cards"
    >
      {observation.observation.photos.length > 0 ? (
        <Link
          to={{
            pathname: `/${observation.observation.id}`,
            state: { observationData: observation.observation },
          }}
          className="image card-image is-4by3"
        >
          <img
            className="center-cropped"
            key={observation.observation.photos[0].id}
            src={observation.observation.photos[0].large_url}
            alt="Observation"
          />
        </Link>
      ) : (
        <Link
          to={{
            pathname: `/${observation.observation.id}`,
            state: { observationData: observation.observation },
          }}
          className="tile p-4"
        >
          <img className="center-cropped" src={photoUnavailable} alt="Observation" />
        </Link>
      )}
      <div className="card-footer is-family-monospace has-text-weight-semibold">
        {observation.observation.taxon.common_name ? (
          <p className="card-footer-item is-capitalized" key={observation.observation.taxon.id}>
            {observation.observation.taxon.common_name.name}
          </p>
        ) : (
          <div></div>
        )}
        <p className="card-footer-item is-capitalized" key={observation.observation.taxon.name}>
          {observation.observation.taxon.name}
        </p>
        <p
          className="card-footer-item is-capitalized"
          key={observation.observation.iconic_taxon_name}
        >
          {observation.observation.iconic_taxon_name}
        </p>
      </div>
    </div>
  );
};

export default ObservationCard;
