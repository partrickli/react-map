import React from 'react';
import './LocationItem.css';

/**
 *
 * @param {Object} props
 * @param {boolean} props.selected
 * @param {string} props.description
 * @param {number} props.latitude
 * @param {number} props.longitude
 * @param {number} props.temperature
 * @param {function} props.selectLocation
 */
function LocationItem(props) {
  const {
    selectLocation,
    selected,
    description,
    latitude,
    longitude,
    temperature,
  } = props;

  return (
    <li
      className={['list-group-item', selected ? 'active' : ''].join(' ')}
      key={description}
      onClick={() => {
        selectLocation(description);
      }}
    >
      <h3 className={'display-4'}>{description}</h3>
      <p className={'display-5'}>{temperature} °C</p>
    </li>
  );
}

export default LocationItem;

// weather ? weather.data.current_condition[0].FeelsLikeC : 'unknown'
