import React from 'react';
import WeatherDetail from './WeatherDetail';
import './LocationItem.css';

/**
 *
 * @param {Object} props
 * @param {boolean} props.selected
 * @param {string} props.description
 * @param {number} props.latitude
 * @param {number} props.longitude
 * @param {number} props.temperature
 * @param {number} props.weatherDesc
 * @param {function} props.selectLocation
 */
function LocationItem(props) {
  const {
    selectLocation,
    selected,
    weatherDesc,
    description,
    temperature,
  } = props;

  const list_class = ['list-group-item', selected ? 'active' : ''];

  return (
    <li
      className={list_class.join(' ')}
      tabIndex={0}
      onClick={(event) => {
        selectLocation(description);
        event.target.focus();
      }}
    >
      <h3 className={'display-4'}>{description}</h3>
      {selected && (
        <WeatherDetail weatherDesc={weatherDesc} temperature={temperature} />
      )}
    </li>
  );
}

export default LocationItem;
