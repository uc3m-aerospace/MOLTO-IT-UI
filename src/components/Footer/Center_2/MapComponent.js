import React, { Component} from 'react';
import '../../../styles/main.scss'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios'

class MapComponent extends Component {
    
    getApiKey = () => {
        let url = 'Center_2/apikey.json'
        return axios.get(url).then(response => response.data)
    }

    componentDidMount(){
        this.getApiKey().then((data) => {
           console.log(data)
        })
    }
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
