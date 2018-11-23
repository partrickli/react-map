import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer';
import LocationList from './LocationList';
import ips from './ip.js';

class App extends Component {
  constructor(props) {
    super(props);

    let _ips = ips.map((ip) => {
      ip.selected = false;
      return ip;
    });
    this.state = {
      filterKeyword: '',
      ips: _ips,
    };

    this.filterKeywordChange = this.filterKeywordChange.bind(this);
    this.selectIp = this.selectIp.bind(this);
  }

  selectIp(ipAddress) {
    console.log(`${ipAddress} selected`);
    this.setState({
      ips: this.state.ips.map((ip) => {
        return ip.ip_address === ipAddress
          ? { ...ip, selected: !ip.selected }
          : ip;
      }),
    });
  }

  filterKeywordChange(keyword) {
    this.setState({
      filterKeyword: keyword,
    });
  }

  render() {
    const filteredIps = this.state.ips.filter((ip) => {
      return RegExp(this.state.filterKeyword, 'i').test(ip.ip_address);
    });
    console.log(filteredIps);

    return (
      <div>
        <LocationList
          ips={filteredIps}
          keywordChange={this.filterKeywordChange}
          selectIp={this.selectIp}
        />
        <MapContainer ips={ips} />
      </div>
    );
  }
}

export default App;
