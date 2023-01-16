import React from 'react';
import Select from './form/Select';
import { Link } from 'react-router-dom';
import TextField from './form/TextField';

const Navbar = ({
  filterOptions,
  filterOptionsTitle,
  onFilterSelect,
  onSearchChange,
  searchVal,
  searchPlaceholder,
  searchByUserPlaceholder,
  onUserSearchChange,
  user,
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

      <div className="is-flex-direction-row">
        <div className="navbar-start">
          <div className="navbar-item has-input">
            <TextField
              searchPlaceholder={searchByUserPlaceholder}
              searchVal={user}
              onSearchChange={onUserSearchChange}
            />
          </div>
          <div className="has-input is-align-self-center navbar-item">
            <Select
              options={filterOptions}
              title={filterOptionsTitle}
              onFilterSelect={onFilterSelect}
            />
          </div>

          <div className="navbar-item has-input">
            <TextField
              searchPlaceholder={searchPlaceholder}
              searchVal={searchVal}
              onSearchChange={onSearchChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
