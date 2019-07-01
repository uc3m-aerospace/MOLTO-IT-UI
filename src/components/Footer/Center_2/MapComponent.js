import React, { Component} from 'react';
import '../../../styles/main.scss'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapComponent extends Component {

    render() {
        return (
            <Map 
                google={this.props.google}
                zoom={15}
                zoomControl={true}
                mapTypeControl={false}
                scaleControl={true}
                streetViewControl={false}
                rotateControl={true}
                fullscreenControl={true}
                initialCenter={{ lat: 40.332034, lng: -3.765979}}
                >
                <Marker position={{ lat: 40.332034, lng: -3.765979}}/>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ''
  })(MapComponent);
