import React from 'react';

const Select = ({ options, title, onFilterSelect }) => {
  //TODO: use onChange with this
  return (
    <div className="select">
      <select onChange={onFilterSelect}>
        <option>{title}</option>
        {options.map((o) => {
          return <option key={o}>{o}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
