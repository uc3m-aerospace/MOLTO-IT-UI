<<<<<<< HEAD
import React from 'react'
=======
import React,{ useState } from 'react'
>>>>>>> 2c84f0c9035324148407ba22b65462fb7eb25e69
import '../../../styles/main.scss'
import Map from './MapComponent'
import constants from '../../../constants/cardsText'

const Center_2 = () => {

        return (
            <React.Fragment>
                <div className="SectionFooter" style={{ height: "330px"}}>
                      <h3>Location</h3>
                      <div style={{display:"block", width: "60%", height: "2px", backgroundColor: "white", alignSelf: "center", margin: "0px", marginLeft:"auto", marginRight:"auto"}}/>        
                      <p>{constants.directionuc3m}</p>
                      <Map/>     
                </div>
             
            </React.Fragment>
        );
};

export default Center_2
