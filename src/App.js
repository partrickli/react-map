import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';
import LocationList from './LocationList';

const initialLocations = [
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
  constructor(props) {
    super(props);
    this.state = {
      filterKeyword: '',
      locations: initialLocations,
      filteredLocations: initialLocations,
    };

    this.filterKeywordChange = this.filterKeywordChange.bind(this);
  }

  filterKeywordChange(keyword) {
    this.setState({
      filterKeyword: keyword,
      filteredLocations: this.state.locations.filter((location) => {
        return RegExp(keyword, 'i').test(location.name);
      }),
    });
  }

  render() {
    return (
      <div>
        <LocationList
          locations={this.state.filteredLocations}
          keywordChange={this.filterKeywordChange}
        />
        {/* <MapContainer locations={locations} /> */}
      </div>
    );
  }
}

export default App;
