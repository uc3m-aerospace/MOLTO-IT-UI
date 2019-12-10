
import React, { Component} from 'react';
import '../../../styles/main.scss'
import axios from 'axios'
import MapGL, {GeolocateControl} from 'react-map-gl'
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

class MapComponent extends Component {
  state = {
    mapStyle: 'mapbox://styles/mapbox/streets-v11',
    viewport: {
      latitude: 40.3322,
      longitude: -3.7658,
      zoom: 15.5,
      bearing: 0,
      pitch: 0
    }
  };

  _onViewportChange = viewport => this.setState({viewport});

    render() {
      const {viewport, mapStyle} = this.state;

        return (
        <MapGL
        {...viewport}
        width="100%"
        height="65%"
        mapStyle={mapStyle}
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
            
        );
    }
};

export default MapComponent;
