import React, { Component} from 'react';
import Logo from '../../../assets/images/MOLTO-BLANCO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faSlack } from '@fortawesome/free-brands-svg-icons'
import { withRouter } from "react-router";
import '../../../styles/main.scss'

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                      <div className="Header">
                          <ul>
                              <li><a href="#About" target="_self">What is MOLTO?</a></li>

                              <li><a href="#Missions" target="_self">Space Missions</a></li>

                                <img src={Logo} style={{height: "45px"}}/>
                              
                              <li><a href="#Collaboration" target="_self">Collaboration</a></li>

                              <li><a href="#Contact" target="_self">Contact</a></li>
                              <ul className="fixedIcons">
                                    <li><a href="https://github.com/uc3m-aerospace/MOLTO-IT" ><FontAwesomeIcon icon={faGithub} size="2x"/></a></li>

                                    <li><a href="https://slack.com" ><FontAwesomeIcon icon={faSlack} size="2x"/></a></li>
                             </ul>      
                          </ul>
                        
                       
                       
                    </div>
            </React.Fragment>
        );
    }
}
export default withRouter(NavBar);
