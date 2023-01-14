import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ObservationCard from '../components/ObservationCard';
import { getObservation } from '../services/list';

const Home = () => {
  const [observationList, setObservationList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  //TODO: how would i do this fetching and setting state differently given what i know today?

  useEffect(() => {
    let mounted = true;
    getObservation().then((items) => {
      if (mounted) {
        setObservationList(items);
        setFilteredList(items);
      }
    });
    return () => (mounted = false);
  }, []);

  const filterOptions = observationList.reduce(
    (unique, o) =>
      unique.includes(o.iconic_taxon.name) ? unique : [...unique, o.iconic_taxon.name],
    []
  );

  const onFilterSelect = (e) => {
    const selected = e.target.value;
    const filtered = observationList.filter((o) => {
      return e.target.value === o.iconic_taxon.name;
    });
    selected === 'Select Type' ? setFilteredList(observationList) : setFilteredList(filtered);
  };

  const onSearchChange = (e) => {
    console.log(e.target.value);
    //TODO: use debounce function
    console.log('heelllo');
  };

  return (
    <div className="py-4 px-6 is-flex is-flex-direction-column is-justify-content-center has-background-warning-light is-max-desktop ">
      <Navbar
        filterOptions={filterOptions}
        filterOptionsTitle="Select Type"
        onFilterSelect={(e) => onFilterSelect(e)}
        onSearchChange={(e) => onSearchChange(e)}
      />
      {/* TODO: Create search with debounce function*/}
      {/* TODO: Create button component*/}
      {/* TODO: Create constant file for colors and some other stuff maybe*/}
      {/* TODO: fix up ObservationIndex  */}

      <div className="container tile is-max-desktop is-align-self-center is-8 flex-wrap is-ancestor">
        <div className="container tile is-parent is-flex-wrap-wrap">
          {filteredList.map((observation) => (
            <ObservationCard key={observation.id} observation={observation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
