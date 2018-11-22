import React from 'react';
import './LocationList.css';

function LocationList(props) {
  const locations = props.locations;
  return (
    <div className="location-list">
      <h1>Location List</h1>
      <input
        className="search"
        onChange={(event) => {
          console.log('search key word change');
          console.log(event.target.value);
        }}
      />
      <ul>
        {locations.map((location) => {
          return <li key={location.id}>{location.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default LocationList;
