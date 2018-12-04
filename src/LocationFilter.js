import React from 'react';

/**
 * @callback FilterLocationCallback
 * @param {string} keyword - filter location
 */
/**
 * @description input key word to filter location list
 * @param {Object} props
 * @param {FilterLocationCallback} props.filterKeywordChange
 */
function LocationFilter(props) {
  return (
    <input
      className="search"
      placeholder="Filter"
      onChange={(event) => {
        props.filterKeywordChange(event.target.value);
      }}
    />
  );
}

export default LocationFilter;
