import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ObservationCard.css';
import photoUnavailable from '../assets/photoUnavailable.png';

const ObservationCard = ({ observation }) => {
  return (
    <div
      className="tile is-child card p-2 is-flex is-flex-direction-column is-justify-content-space-evenly"
      id="cards"
    >
      {observation?.photos?.length > 0 ? (
        <Link
          to={{
            pathname: `/${observation?.id}`,
            state: { observationData: observation },
          }}
          className="image card-image is-4by3"
        >
          <img
            className="center-cropped"
            key={observation?.photos[0]?.id}
            src={observation?.photos[0]?.large_url}
            alt="Observation"
          />
        </Link>
      ) : (
        <Link
          to={{
            pathname: `/${observation?.id}`,
            state: { observationData: observation },
          }}
          className="tile p-4"
        >
          <img className="center-cropped" src={photoUnavailable} alt="Observation" />
        </Link>
      )}
      <div className="card-footer is-family-monospace has-text-weight-semibold">
        {/* TODO: Make paragraphs reusable */}
        {observation?.taxon?.common_name ? (
          <p className="card-footer-item is-capitalized" key={observation?.taxon?.id}>
            {observation?.taxon?.common_name?.name}
          </p>
        ) : (
          <div></div>
        )}
        <p className="card-footer-item is-capitalized" key={observation?.taxon?.name}>
          {observation?.taxon?.name}
        </p>
        <p className="card-footer-item is-capitalized" key={observation?.iconic_taxon_name}>
          {observation?.iconic_taxon_name}
        </p>
      </div>
    </div>
  );
};

export default ObservationCard;
