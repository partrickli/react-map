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
      <input
        className="search"
        placeholder="Search"
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
                <p className="detail">
                  {' '}
                  {`${location.latitude} | ${location.longitude}`}{' '}
                </p>
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
