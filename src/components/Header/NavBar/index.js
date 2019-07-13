import React, { Component} from 'react';
import Logo from '../../../assets/images/MOLTO-BLANCO.png'
import LogoIT from '../../../assets/images/MOLTO-IT-BLANCO.png'
import LogoOR from '../../../assets/images/MOLTO-OR-BLANCO.png'
import Logo3BP from '../../../assets/images/MOLTO-3BP-BLANCO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faSlack } from '@fortawesome/free-brands-svg-icons'
import { withRouter } from "react-router";
import '../../../styles/main.scss'



class NavBar extends Component {
    render() {

        
        const getLogo = () => {
            let rightLogo;
            if (this.props.location.pathname === '/') {
                return rightLogo = Logo
            } else if (this.props.location.pathname === '/moltoit') {
                return rightLogo = LogoIT
            } else if (this.props.location.pathname === '/moltoor') {
                return rightLogo = LogoOR
            } else if (this.props.location.pathname === '/molto3bp') {
                return rightLogo = Logo3BP
            } else {
                return rightLogo = Logo
            }
        }
    
        return (
            <React.Fragment>
                      <div className="Header">
                          <ul>
                              <li><a href="#About" target="_self">What is MOLTO?</a></li>

                              <li><a href="#Missions" target="_self">Space Missions</a></li>

                              <img src={getLogo()} style={{height: "45px", marginLeft: "40px", marginRight: "40px"}}/>
                              
                              <li><a href="#Collaboration" target="_self">Collaboration</a></li>

                              <li><a href="#Contact" target="_self">Contact</a></li>
                              <ul className="fixedIcons">
                                    <li style={{width: '40px'}}><a href="https://github.com/uc3m-aerospace/MOLTO-IT" ><FontAwesomeIcon icon={faGithub} size="2x"/></a></li>

                                    <li style={{width: '40px'}}><a href="https://slack.com" ><FontAwesomeIcon icon={faSlack} size="2x"/></a></li>
                             </ul>      
                          </ul>
                        
                       
                       
                    </div>
            </React.Fragment>
        );
    }
}
export default withRouter(NavBar);
