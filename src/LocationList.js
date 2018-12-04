import React from 'react';
import './LocationList.css';
import LocationItem from './LocationItem';
import LocationFilter from './LocationFilter';

function LocationList(props) {
  const { locations, selectLocation, filterKeywordChange } = props;

  let classes = [
    'location-list',
    props.isVisible ? 'list-visible' : 'list-invisible',
  ].join(' ');

  return (
    <div className={classes} role="navigation" aria-label="LocationList">
      <LocationFilter filterKeywordChange={filterKeywordChange} />
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
              temperature={location.temperature}
              weatherDesc={location.weatherDesc}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default LocationList;
