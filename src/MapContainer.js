import React from 'react';
import './MapContainer.css';
import { GoogleApiWrapper, Map, InfoWindow } from 'google-maps-react';
import { Marker } from 'google-maps-react/dist/components/Marker';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  onMarkerClick = (props, marker) => {
    this.props.selectLocation(marker.description);
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedPlace: props,
    });
  };

  render() {
    return (
      <div role="application" aria-label="locations" className="map-container">
        <Map
          google={this.props.google}
          zoom={9}
          initialCenter={{
            lat: 29.2672442155,
            lng: 120.7617164449,
          }}
        >
          {this.props.locations.map((location) => {
            return (
              <Marker
                position={{
                  lat: location.latitude,
                  lng: location.longitude,
                }}
                name={location.description}
                title={location.description}
                description={location.description}
                weatherDesc={location.weatherDesc}
                temperature={location.temperature}
                key={location.description}
                onClick={this.onMarkerClick}
                animation={
                  location.selected
                    ? this.props.google.maps.Animation.BOUNCE
                    : undefined
                }
              />
            );
          })}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h3>{this.state.selectedPlace.weatherDesc}</h3>
              <h3>{this.state.selectedPlace.temperature}°C</h3>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA1PwAqtEP0ESqT7bpOwVLsB2ChJXAgrDs',
})(MapContainer);
