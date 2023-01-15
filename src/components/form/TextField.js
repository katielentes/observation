import React from 'react';

const TextField = ({ searchVal, searchPlaceholder, onSearchChange }) => {
  return (
    <input
      value={searchVal}
      className="input"
      type="text"
      placeholder={searchPlaceholder}
      onChange={onSearchChange}
    ></input>
  );
};

export default TextField;
