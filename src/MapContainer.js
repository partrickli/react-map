import React from 'react';
import './MapContainer.css';
import { GoogleApiWrapper, Map, InfoWindow } from 'google-maps-react';
import { Marker } from 'google-maps-react/dist/components/Marker';
import WeatherDetail from './WeatherDetail';

export class MapContainer extends React.Component {
  onMarkerClick = (city) => {
    this.props.selectLocation(city);
    this.props.hideLocationList();
  };

  render() {
    const initialCenter = {
      lat: 29.2672442155,
      lng: 120.7617164449,
    };

    const locations = this.props.locations.map((location) => {
      return {
        ...location,
        position: {
          lat: location.latitude,
          lng: location.longitude,
        },
        infoPosition: {
          lat: location.latitude + 0.1,
          lng: location.longitude + 0.1,
        },
      };
    });

    const selectedLocation = locations.find((location) => {
      return location.selected === true;
    });

    const isAnyLocationSelected = locations.some((location) => {
      return location.selected === true;
    });

    return (
      <div role="application" aria-label="locations" className="map-container">
        <Map
          google={this.props.google}
          zoom={9}
          initialCenter={initialCenter}
          onClick={() => {
            this.props.hideLocationList();
          }}
        >
          {locations.map((location) => {
            return (
              <Marker
                position={location.position}
                weatherDesc={location.weatherDesc}
                temperature={location.temperature}
                key={location.description}
                onClick={() => {
                  this.onMarkerClick(location.description);
                }}
                animation={
                  location.selected
                    ? this.props.google.maps.Animation.BOUNCE
                    : undefined
                }
              />
            );
          })}
          {isAnyLocationSelected && (
            <InfoWindow
              visible={isAnyLocationSelected}
              position={selectedLocation.infoPosition}
            >
              <WeatherDetail
                weatherDesc={selectedLocation.weatherDesc}
                temperature={selectedLocation.temperature}
              />
            </InfoWindow>
          )}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA1PwAqtEP0ESqT7bpOwVLsB2ChJXAgrDs',
})(MapContainer);
