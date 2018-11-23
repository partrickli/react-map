import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';
import LocationList from './LocationList';

const locations = [
  {
    description: 'Company',
    latitude: 27.995118,
    longitude: 120.712207,
  },
  {
    description: 'Home',
    latitude: 28.017123,
    longitude: 120.612778,
  },
];
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterKeyword: '',
      locations: locations,
    };

    this.filterKeywordChange = this.filterKeywordChange.bind(this);
    this.selectLocation = this.selectLocation.bind(this);
  }

  selectLocation(description) {
    this.setState({
      locations: this.state.locations.map((location) => {
        return location.description === description
          ? { ...location, selected: !location.selected }
          : location;
      }),
    });
  }

  filterKeywordChange(keyword) {
    this.setState({
      filterKeyword: keyword,
    });
  }

  render() {
    const filteredLocations = this.state.locations.filter((location) => {
      return RegExp(this.state.filterKeyword, 'i').test(location.description);
    });

    return (
      <div>
        <LocationList
          locations={filteredLocations}
          keywordChange={this.filterKeywordChange}
          selectLocation={this.selectLocation}
        />
        <MapContainer locations={filteredLocations} />
      </div>
    );
  }
}

export default App;
