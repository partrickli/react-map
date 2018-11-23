import React from 'react';
import './MapContainer.css';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { Marker } from 'google-maps-react/dist/components/Marker';

export class MapContainer extends React.Component {
  render() {
    return (
      <div className="map-container">
        <Map
          google={this.props.google}
          zoom={5}
          initialCenter={{
            lat: this.props.ips[0].latitude,
            lng: this.props.ips[0].longitude,
          }}
          onClick={() => {
            console.log('click');
          }}
        >
          {this.props.ips.map((ip) => {
            return (
              <Marker
                position={{
                  lat: ip.latitude,
                  lng: ip.longitude,
                }}
                name={ip.city}
                title={ip.ip_address}
              />
            );
          })}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA1PwAqtEP0ESqT7bpOwVLsB2ChJXAgrDs',
})(MapContainer);
