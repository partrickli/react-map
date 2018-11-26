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
    console.log(`${marker} clicked`);
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedPlace: props,
    });
  };

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
              <h2>{this.state.selectedPlace.title}</h2>
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
