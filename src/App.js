import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';
import LocationList from './LocationList';
import ips from './ip.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterKeyword: '',
      ips: ips,
      filteredIps: ips,
    };

    this.filterKeywordChange = this.filterKeywordChange.bind(this);
  }

  filterKeywordChange(keyword) {
    this.setState({
      filterKeyword: keyword,
      filteredIps: this.state.ips.filter((ip) => {
        return RegExp(keyword, 'i').test(ip.ip_address);
      }),
    });
  }

  render() {
    return (
      <div>
        <LocationList
          ips={this.state.filteredIps}
          keywordChange={this.filterKeywordChange}
        />
        {/* <MapContainer locations={locations} /> */}
      </div>
    );
  }
}

export default App;
