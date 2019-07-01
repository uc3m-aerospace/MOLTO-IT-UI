import React, { Component} from 'react';
import '../../../styles/main.scss'
import Map from './MapComponent'
import constants from '../../../constants/cardsText'

class Center_2 extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="SectionFooter">
                      <h3>Location</h3>
                      <div style={{display:"block", width: "60%", height: "2px", backgroundColor: "white", alignSelf: "center", margin: "0px", marginLeft:"auto", marginRight:"auto"}}/>        
                      <p>{constants.directionuc3m}</p>
                      <Map/>
                </div>
            </React.Fragment>
        );
    }
}

export default Center_2
