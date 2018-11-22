import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';
import LocationList from './LocationList';

const locations = [
  {
    id: 'jfdifjhiw3we',
    name: 'Star Bucks',
  },
  {
    id: 'orutrn93958',
    name: 'KFC',
  },
];
class App extends Component {
  render() {
    return (
      <div>
        <LocationList locations={locations} />
        <MapContainer />
      </div>
    );
  }
}

export default App;
