import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';
import LocationList from './LocationList';

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
      isListVisible: false,
    };

    this.filterKeywordChange = this.filterKeywordChange.bind(this);
  }

  componentDidMount() {
    console.log('App did mount');
    let city = 'wenzhou';
    let queryString = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=547217b339f04bdf96e55115182711&q=${city}&format=json&num_of_days=5`;
    // fetch(queryString)
    //   .then((r) => r.json())
    //   .then((cityWeather) => {
    //     this.setState({
    //       weather: [{ city: cityWeather }],
    //     });
    //   });
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
