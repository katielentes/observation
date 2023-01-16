import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from '../utils/debounce';
import { hasValue } from '../utils/hasValue';
import Navbar from '../components/Navbar';
import ObservationCard from '../components/ObservationCard';
import { getObservationListByUser } from '../services/list';

const Home = () => {
  const [user, setUser] = useState('katie1441');
  const [observationList, setObservationList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const DEFAULT = 'Select Kingdom';

  useEffect(() => {
    setIsLoading(true);
    //good users to look at  - psweet, vogelbild, wuhsienluson
    debouncedCallback(() => {
      handleGetObservationListByUser(user);
    }, user);
  }, [user]);

  useEffect(() => {
    observationList.length > 0 &&
      debouncedCallback(() => {
        handleSearch(searchVal);
      }, searchVal);
  }, [searchVal]);

  const handleGetObservationListByUser = () => {
    setIsLoading(true);
    getObservationListByUser(user).then((observations) => {
      setIsLoading(false);
      setObservationList(observations);
      setFilteredList(observations);
    });
  };

  const debouncedCallback = useCallback(
    debounce((callback, nextValue) => callback(nextValue), 750),
    []
  );

  const handleSearch = (value) => {
    setIsLoading(true);
    const filtered = observationList.filter((o) => {
      return (
        hasValue(o.taxon?.common_name?.name, value) ||
        hasValue(o.species_guess, value) ||
        hasValue(o.taxon?.name, value)
      );
    });
    setFilteredList(filtered);
    setIsLoading(false);
  };

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

  const onUserSearchChange = (e) => {
    setUser(e.target.value.toLowerCase());
  };

  const filterOptions =
    observationList &&
    observationList.reduce(
      (unique, o) =>
        unique.includes(o?.iconic_taxon?.name) ? unique : [...unique, o?.iconic_taxon?.name],
      []
    );

  return (
    <div>
      <Navbar
        filterOptions={filterOptions}
        filterOptionsTitle={DEFAULT}
        onFilterSelect={(e) => onFilterSelect(e)}
        onSearchChange={(e) => onSearchChange(e)}
        searchVal={searchVal}
        user={user}
        searchPlaceholder="Search by name"
        searchByUserPlaceholder="Search user"
        onUserSearchChange={onUserSearchChange}
      />

      <div className=" level container is-max-desktop is-align-self-center flex-wrap is-ancestor">
        {isLoading ? <div>Loading...!</div> : <></>}
        {!isLoading && observationList && (
          <div className="container tile is-parent is-flex-wrap-wrap">
            {filteredList?.length > 0 ? (
              filteredList.map((observation) => (
                <ObservationCard key={observation.id} observation={observation} />
              ))
            ) : (
              <div>No matches</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
