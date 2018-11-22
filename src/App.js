import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';
import LocationList from './LocationList';

const locations = [
  {
    id: 'jfdifjhiw3we',
    coordinate: {
      lat: 28.017153,
      lng: 120.612753,
    },
    name: 'Home',
  },
  {
    id: 'orutrn93958',
    name: 'KFC',
  },
  {
    id: 'djif',
    name: 'Work',
  },
  {
    id: 'ijeijigpe',
    name: 'Shoping Mall',
  },
  {
    id: 'dijfidoijfodios',
    name: 'Park',
  },
];
class App extends Component {
  render() {
    return (
      <div>
        <LocationList locations={locations} />
        {/* <MapContainer locations={locations} /> */}
      </div>
    );
  }
}

export default App;
