import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from '../utils/debounce';
import Navbar from '../components/Navbar';
import ObservationCard from '../components/ObservationCard';
import { getObservation } from '../services/list';

const Home = () => {
  const [observationList, setObservationList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const DEFAULT = 'Select Kingdom';

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

  const debouncedCallback = useCallback(
    debounce((callback, nextValue) => callback(nextValue), 750),
    []
  );

  useEffect(() => {
    debouncedCallback(() => {
      handleSearch(searchVal);
    }, searchVal);
  }, [searchVal, observationList]);

  const handleSearch = (value) => {
    setIsLoading(true);
    const filtered = observationList.filter((o) => {
      return (
        o.taxon?.common_name?.name.toLowerCase().includes(value) ||
        o.species_guess?.toLowerCase().includes(value)
      );
    });
    setFilteredList(filtered);
    setIsLoading(false);
  };

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
    selected === DEFAULT ? setFilteredList(observationList) : setFilteredList(filtered);
  };

  const onSearchChange = (e) => {
    setSearchVal(e.target.value.toLowerCase());
  };

  return (
    <div className="py-4 px-6 is-flex is-flex-direction-column is-justify-content-center has-background-warning-light is-max-desktop ">
      <Navbar
        filterOptions={filterOptions}
        filterOptionsTitle={DEFAULT}
        onFilterSelect={(e) => onFilterSelect(e)}
        onSearchChange={(e) => onSearchChange(e)}
        searchVal={searchVal}
        searchPlaceholder="Search by name"
      />

      {/* TODO: Create constant file for colors and some other stuff maybe*/}
      {/* TODO: fix up ObservationIndex  */}

      <div className="container is-max-desktop is-align-self-center   flex-wrap is-ancestor">
        {isLoading ? <div>Loading...!</div> : <></>}
        <div className="container tile is-parent is-flex-wrap-wrap">
          {filteredList.length > 0 ? (
            filteredList.map((observation) => (
              <ObservationCard key={observation.id} observation={observation} />
            ))
          ) : (
            <div>No matching observations</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
