import React from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';
export class MapContainer extends React.Component {
  render() {
    return <Map google={this.props.google} zoom={14} />;
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA1PwAqtEP0ESqT7bpOwVLsB2ChJXAgrDs',
})(MapContainer);
