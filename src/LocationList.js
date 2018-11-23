import React from 'react';
import './LocationList.css';

function LocationList(props) {
  const ips = props.ips;
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
      <ul>
        {ips.map((ip) => {
          return <li key={ip.ip_address}>{ip.ip_address}</li>;
        })}
      </ul>
    </div>
  );
}

export default LocationList;
