import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Select from '../components/Select';
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
        //maybe here is where we set default for filtered OL
      }
    });
    return () => (mounted = false);
  }, []);

  const filterOptions = observationList.reduce(
    (unique, o) =>
      unique.includes(o.iconic_taxon.name) ? unique : [...unique, o.iconic_taxon.name],
    []
  );

  //TODO: make it so filterOptions don't change when selecting a filter
  //TODO: defaut to all on mount
  const onFilterSelect = (e) => {
    console.log(e.target.value);
    const filtered = observationList.filter((o) => {
      return e.target.value === o.iconic_taxon.name;
    });
    setObservationList(filtered);
  };

  return (
    <div className="py-4 px-6 is-flex is-flex-direction-column is-justify-content-center has-background-warning-light is-max-desktop ">
      <Navbar />
      {/* TODO: Create search with debounce function*/}
      {/* TODO: Create button component*/}
      {/* TODO: Create constant file for colors and some other stuff maybe*/}
      <Select
        options={filterOptions}
        title="Select Type"
        onFilterSelect={(e) => onFilterSelect(e)}
      />

      <div className="container tile is-max-desktop is-align-self-center is-8 flex-wrap is-ancestor">
        <div className="container tile is-parent is-flex-wrap-wrap">
          {observationList.map((observation) => (
            <ObservationCard key={observation.id} observation={observation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
