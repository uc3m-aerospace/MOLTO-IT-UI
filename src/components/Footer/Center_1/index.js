import React, { Component} from 'react';
import '../../../styles/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Center_1 extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="SectionFooter">
                      <h3>Contact</h3>
                      <div style={{display:"block", width: "60%", height: "2px", backgroundColor: "white", alignSelf: "center", margin: "0px", marginLeft:"auto", marginRight:"auto"}}/>
                      
                      <ul className="fixedIconsFooter">
                                  <li><a href="https://github.com/uc3m-aerospace/MOLTO-IT" ><FontAwesomeIcon icon={faEnvelope} size="2x"/></a></li>
                                  <p style={{margin: "0px", paddingTop:"5px"}}>contact@molto.com</p>
                      </ul> 
                      
                </div>
            </React.Fragment>
        );
    }
}

export default Center_1;
