import React from 'react';
import './MapContainer.css';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { Marker } from 'google-maps-react/dist/components/Marker';

const style = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends React.Component {
  render() {
    return (
      <div className="map-container">
        <Map className="map" style={style} google={this.props.google} zoom={14}>
          <Marker name={'current location'} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA1PwAqtEP0ESqT7bpOwVLsB2ChJXAgrDs',
})(MapContainer);
