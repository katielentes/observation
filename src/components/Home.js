import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ObservationCard from '../components/ObservationCard';
import { getObservation } from '../services/list';

const Home = () => {
  const [observationList, setObservationList] = useState([]);

  //TODO: how would i do this fetching and setting state differently given what i know today?
  useEffect(() => {
    let mounted = true;
    getObservation().then((items) => {
      if (mounted) {
        setObservationList(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="py-4 px-6 is-flex is-flex-direction-column is-justify-content-center has-background-warning-light is-max-desktop ">
      <Navbar />
      {/* TODO: Create filter and put it here*/}
      <div className="container tile is-max-desktop is-align-self-center is-8 flex-wrap is-ancestor">
        <div className="container tile is-parent is-flex-wrap-wrap">
          {observationList.map((observation) => (
            <ObservationCard observation={observation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
