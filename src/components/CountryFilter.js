import React from 'react';
import { useStore } from 'react-redux';
import PropTypes from 'prop-types';

const CountryFilter = ({ onFilter }) => {
  const countries = [
    'Austria',
    'France',
    'Italy',
    'Japan',
    'Malaysia',
    'Spain',
  ];

  const handleFilter = ({ target }) => {
    onFilter(target.value);
  };

  const store = useStore().getState();

  return (
    <div id="select">
      Select Country
      {' '}
      <select
        name="category"
        data-testid="head-select"
        onChange={handleFilter}
        value={store.filter}
      >
        <option value="All" key="All">
          All
        </option>
        {countries.map(cat => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

CountryFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default CountryFilter;
