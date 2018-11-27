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
      isListVisible: false,
    };

    this.filterKeywordChange = this.filterKeywordChange.bind(this);
  }

  selectLocation = (description) => {
    this.setState({
      locations: this.state.locations.map((location) => {
        return { ...location, selected: location.description === description };
      }),
    });
  };

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
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            this.setState({
              isListVisible: !this.state.isListVisible,
            });
          }}
        >
          Locations
        </button>
        <LocationList
          isVisible={this.state.isListVisible}
          locations={filteredLocations}
          keywordChange={this.filterKeywordChange}
          selectLocation={this.selectLocation}
        />
        <MapContainer
          locations={filteredLocations}
          selectLocation={this.selectLocation}
        />
      </div>
    );
  }
}

export default App;
