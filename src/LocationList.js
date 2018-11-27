import React from 'react';
import './LocationList.css';

function LocationList(props) {
  const locations = props.locations;

  let classes = [
    'location-list',
    props.isVisible ? 'list-visible' : 'list-invisible',
  ].join(' ');
  return (
    <div className={classes}>
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
              className={[
                'list-group-item',
                location.selected ? 'active' : '',
              ].join(' ')}
              key={location.description}
              onClick={() => {
                props.selectLocation(location.description);
              }}
            >
              {`${location.description}`}
              {location.selected ? (
                <p> {`${location.latitude} | ${location.longitude}`} </p>
              ) : (
                ''
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LocationList;
