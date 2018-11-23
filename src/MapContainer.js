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
          zoom={13}
          initialCenter={{
            lat: this.props.locations[0].latitude,
            lng: this.props.locations[0].longitude,
          }}
        >
          {this.props.locations.map((location) => {
            return (
              <Marker
                position={{
                  lat: location.latitude,
                  lng: location.longitude,
                }}
                name={location.city}
                title={location.description}
                key={location.description}
                animation={
                  location.selected
                    ? this.props.google.maps.Animation.BOUNCE
                    : undefined
                }
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
