import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ObservationCard from '../components/ObservationCard';
import { getObservation } from '../services/list';

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getObservation().then((items) => {
      if (mounted) {
        setList(items);
      }
    });
    return () => (mounted = false);
  }, []);

  const observation_collection = list.map((item) => item);

  return (
    <div className="p-4 is-flex is-justify-content-center">
      <Navbar />
      <div className="container tile is-max-desktop is-8 flex-wrap is-ancestor">
        <div className="container tile is-parent is-flex-wrap-wrap">
          {observation_collection.map((observation) => (
            <ObservationCard observation={observation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
