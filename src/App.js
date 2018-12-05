import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';
import LocationList from './LocationList';
import { Collection } from './util';
import fetchWeather from './weather';

const locations = [
  {
    description: 'WenZhou',
    latitude: 27.994922751,
    longitude: 120.6993796212,
  },
  {
    description: 'HangZhou',
    latitude: 30.2741702308,
    longitude: 120.1551656314,
  },
  {
    description: 'Ningbo',
    latitude: 29.8738659036,
    longitude: 121.5502681384,
  },
  {
    description: 'JinHua',
    latitude: 29.0781148048,
    longitude: 119.6475745002,
  },
  {
    description: 'TaiZhou',
    latitude: 28.6561185037,
    longitude: 121.4205629493,
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterKeyword: '',
      locations: locations,
      isListVisible: true,
    };
  }

  componentDidMount() {
    console.log('App did mount');
    let cityNames = locations.map((location) => location.description);

    cityNames.forEach((cityName) => {
      fetchWeather(cityName).then((weather) => {
        const locationsCollection = new Collection(...this.state.locations);

        const locationsWithWeather = locationsCollection.conditionalMap(
          (location) => location.description === cityName,
          (location) => ({ ...location, ...weather })
        );

        this.setState({
          locations: locationsWithWeather,
        });
      });
    });
  }

  selectLocation = (description) => {
    this.setState({
      locations: this.state.locations.map((location) => {
        return { ...location, selected: location.description === description };
      }),
    });
  };

  filterKeywordChange = (keyword) => {
    this.setState({
      filterKeyword: keyword,
    });
  };

  hideLocationList = () => {
    this.setState({
      isListVisible: false,
    });
  };

  render() {
    const filteredLocations = this.state.locations.filter((location) => {
      return RegExp(this.state.filterKeyword, 'i').test(location.description);
    });

    return (
      <div>
        <button
          type="button"
          className="list-toggle btn btn-primary"
          onClick={() => {
            this.setState({
              isListVisible: !this.state.isListVisible,
            });
          }}
        />
        <LocationList
          isVisible={this.state.isListVisible}
          locations={filteredLocations}
          filterKeywordChange={this.filterKeywordChange}
          selectLocation={this.selectLocation}
        />
        <MapContainer
          locations={filteredLocations}
          selectLocation={this.selectLocation}
          hideLocationList={this.hideLocationList}
        />
      </div>
    );
  }
}

export default App;
