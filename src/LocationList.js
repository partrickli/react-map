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
          console.log(event.target.value);
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
              latitude={location.latitude}
              longitude={location.longitude}
              temperature={
                location.weather
                  ? location.weather.data.current_condition[0].FeelsLikeC
                  : 'unknown'
              }
              weatherDesc={
                location.weather
                  ? location.weather.data.current_condition[0].weatherDesc[0]
                      .value
                  : 'sunny or rainy, no idea'
              }
            />
          );
        })}
      </ul>
    </div>
  );
}

export default LocationList;
