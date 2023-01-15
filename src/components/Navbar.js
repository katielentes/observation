import React from 'react';
import Select from '../components/Select';
import { Link } from 'react-router-dom';

const Navbar = ({
  filterOptions,
  filterOptionsTitle,
  onFilterSelect,
  onSearchChange,
  searchVal,
}) => {
  return (
    <div className="navbar has-background-warning-light is-align-items-center">
      <div className="navbar-brand">
        <Link
          to={{
            pathname: `/`,
          }}
          className="navbar-item is-size-1"
        >
          🔍🌱
        </Link>
      </div>

      <div className="navbar-menu is-flex-direction-row">
        <div className="navbar-start">
          <div className="has-input is-align-self-center">
            <Select
              options={filterOptions}
              title={filterOptionsTitle}
              onFilterSelect={onFilterSelect}
            />
          </div>

          <div className="navbar-item has-input">
            <input
              value={searchVal}
              className="input"
              type="text"
              placeholder="Search by name"
              onChange={onSearchChange}
            ></input>
            <button className="button is-primary  ml-1">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
