import React from 'react';
import './MapContainer.css';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { Marker } from 'google-maps-react/dist/components/Marker';
import LocationList from './LocationList';

const style = {
  width: '100%',
  height: '100%',
};

const home = {
  lat: 28.017153,
  lng: 120.612753,
};
export class MapContainer extends React.Component {
  render() {
    return (
      <div className="map-container">
        <Map
          className="map"
          style={style}
          google={this.props.google}
          zoom={14}
          initialCenter={home}
          onClick={() => {
            console.log('click');
          }}
        >
          {this.props.locations.map((location) => {
            return <Marker name={'current location'} title="Home" />;
          })}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA1PwAqtEP0ESqT7bpOwVLsB2ChJXAgrDs',
})(MapContainer);
