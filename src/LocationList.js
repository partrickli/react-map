import React from 'react';
import './LocationList.css';
import LocationItem from './LocationItem';

function LocationList(props) {
  const { locations, selectLocation } = props;

  let classes = [
    'location-list',
    props.isVisible ? 'list-visible' : 'list-invisible',
  ].join(' ');

  return (
    <div className={classes} role="navigation" aria-label="LocationList">
      <input
        className="search"
        placeholder="Search"
        onChange={(event) => {
          props.keywordChange(event.target.value);
        }}
      />
      <ul className="list-group">
        {locations.map((location) => {
          return (
            <LocationItem
              selectLocation={selectLocation}
              selected={location.selected}
              description={location.description}
              key={location.description}
              latitude={location.latitude}
              longitude={location.longitude}
              temperature={
                location.weather
                  ? location.weather.data.current_condition[0].FeelsLikeC
                  : ''
              }
              weatherDesc={
                location.weather
                  ? location.weather.data.current_condition[0].weatherDesc[0]
                      .value
                  : ''
              }
            />
          );
        })}
      </ul>
    </div>
  );
}

export default LocationList;
