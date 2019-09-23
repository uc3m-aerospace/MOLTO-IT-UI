import React, { useState} from 'react';
import '../../../styles/main.scss'
import axios from 'axios'
import MapGL, {GeolocateControl } from 'react-map-gl'
const TOKEN = process.env.MAPBOX_TOKEN;

const geolocateStyle = {
    float: 'left',
    margin: '50px',
    padding: '10px'
  };
  

const MapComponent = () => {
    
    /*getApiKey = () => {
        let url = 'Center_2/apikey.json'
        return axios.get(url).then(response => response.data)
    }
    */

    const geolocateStyle = {
        float: 'left',
        margin: '50px',
        padding: '10px'
    };

    const [viewport, setViewPort ] = useState({
        width: "100%",
        height: 900,
        latitude: 0,
        longitude: 0,
        zoom: 2
    })

    const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })

        return (
            <MapGL
            {...viewport}
            mapboxApiAccessToken={TOKEN}
            mapStyle="mapbox://styles/mapbox/dark-v8"
            onViewportChange={_onViewportChange}
          >
            <GeolocateControl
              style={geolocateStyle}
              positionOptions={{enableHighAccuracy: true}}
              trackUserLocation={true}
            />
          </MapGL>
        );
};

export default MapComponent;
