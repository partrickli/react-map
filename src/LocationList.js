import React from 'react';

function LocationList(props) {
  const locations = props.locations;
  return (
    <div className="location-list">
      <h1>Location List</h1>
      <input
        className="search"
        onChange={(event) => {
          console.log(event.target.value);
          props.keywordChange(event.target.value);
        }}
      />
      <ul className="list-group">
        {locations.map((location) => {
          return (
            <li
              className="list-group-item"
              key={location.description}
              onClick={() => {
                props.selectLocation(location.description);
              }}
            >
              {`${location.description} : ${
                location.selected ? 'selected' : 'not selected'
              }`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LocationList;
