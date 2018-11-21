import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
class MapContainer extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    } else {
      return <div>Map will go here</div>;
    }
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA1PwAqtEP0ESqT7bpOwVLsB2ChJXAgrDs',
})(MapContainer);
