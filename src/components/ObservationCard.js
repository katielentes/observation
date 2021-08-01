import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import './ObservationCard.css';

const ObservationCard = (observation) => {
  const history = useHistory();
  const handleClick = () => history.push('/observation');

  return (
    <div className="tile is-child card p-2" id="cards">
      <>
        {observation.observation.photos.length > 0 ? (
          <Link onClick={handleClick} className="image card-image is-4by3">
            <img
              className="center-cropped"
              key={observation.observation.photos[0].id}
              src={observation.observation.photos[0].large_url}
              alt="Observation"
            />
          </Link>
        ) : (
          <Link className="tile p-4" onClick={handleClick}>
            No photo available
          </Link>
        )}
        <div className="card-footer has-text-weight-semibold">
          {observation.observation.taxon.common_name ? (
            <p className="card-footer-item is-capitalized" key={observation.observation.taxon.id}>
              {observation.observation.taxon.common_name.name}
            </p>
          ) : (
            <div></div>
          )}
          <p className="card-footer-item is-capitalized" key={observation.observation.taxon.id}>
            {observation.observation.taxon.name}
          </p>
          <p className="card-footer-item is-capitalized" key={observation.observation.id}>
            {observation.observation.iconic_taxon_name}
          </p>
        </div>
      </>
    </div>
  );
};

export default ObservationCard;
