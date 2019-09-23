import React, { Component} from 'react';
import '../../../styles/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons'

class Rigth extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="SectionFooter" style={{ height: "170px"}}>
                      <h3>Social Media</h3>
                      <div style={{display:"block", width: "60%", height: "2px", backgroundColor: "white", alignSelf: "center", margin: "0px", marginLeft:"auto", marginRight:"auto"}}/>
                      <ul className="fixedIconsFooter" style={{padding: 0}}>
                                  <li><a href="https://github.com/uc3m-aerospace/MOLTO-IT" ><FontAwesomeIcon icon={faFacebook} size="2x"/></a></li>
                                  <li><a href="https://slack.com" ><FontAwesomeIcon icon={faTwitter} size="2x"/></a></li>
                                  <li><a href="https://github.com/uc3m-aerospace/MOLTO-IT" ><FontAwesomeIcon icon={faYoutube} size="2x"/></a></li>
                                  <li><a href="https://slack.com" ><FontAwesomeIcon icon={faLinkedin} size="2x"/></a></li>
                      </ul>      
                </div>
            </React.Fragment>
        );
    }
}

export default Rigth;
