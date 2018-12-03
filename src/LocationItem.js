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
      onClick={() => {
        selectLocation(description);
      }}
    >
      <h3 className={'display-4'}>{description}</h3>
      {selected && (
        <div className={'weather-detail-container'}>
          <p className={'display-5'}>{temperature} °C</p>
          <p className={'display-5'}>{weatherDesc} </p>
        </div>
      )}
    </li>
  );
}

export default LocationItem;
