import React from 'react';
import Logo from '../../../assets/images/MOLTO-BLANCO.png'
import LogoIT from '../../../assets/images/MOLTO-IT-BLANCO.png'
import LogoOR from '../../../assets/images/MOLTO-OR-BLANCO.png'
import Logo3BP from '../../../assets/images/MOLTO-3BP-BLANCO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faSlack} from '@fortawesome/free-brands-svg-icons'
import { withRouter } from "react-router";
import '../../../styles/main.scss'
import {useWindowSize} from '../../Hooks/useWindowSize'

const NavBar = (props) => {
        const size = useWindowSize();
        const pathname = window.location.pathname;

        const getLogo = () => {        
            if (props.location.pathname === '/') {
                return Logo
            } else if (props.location.pathname === '/moltoit') {
                return LogoIT
            } else if (props.location.pathname === '/moltoor') {
                return LogoOR
            } else if (props.location.pathname === '/molto3bp') {
                return Logo3BP
            } else {
                return Logo
            }
        }
    
        return (
            <React.Fragment>
                      <div className="Header">
                          {size.width > 810 ?
                          <ul>
                              <li><a href="/#About" target="_self">What is MOLTO?</a></li>

                              <li><a href="/#Missions" target="_self">Space Missions</a></li>

                              <a href="/"><img src={getLogo()} style={{height: "45px", marginLeft: "40px", marginRight: "40px"}} alt="logo"/></a>
                              
                              <li><a href="/#Collaboration" target="_self">Collaboration</a></li>

                              <li><a href={pathname + '#Contact' } target="_self">Contact</a></li>
                              <ul className="fixedIcons">
                                    <li style={{width: '40px'}}><a href="https://github.com/uc3m-aerospace/MOLTO-IT" ><FontAwesomeIcon icon={faGithub} size="2x"/></a></li>

                                    <li style={{width: '40px'}}><a href="https://slack.com" ><FontAwesomeIcon icon={faSlack} size="2x"/></a></li>
                             </ul>      
                          </ul>
                          :
                          <ul>
                            <ul className="fixedIcons">
                                <li style={{width: '40px'}}><a href="https://github.com/uc3m-aerospace/MOLTO-IT" ><FontAwesomeIcon icon={faSlack} size="2x"/></a></li>
                            </ul>    

                            <img src={getLogo()} style={{margin: '0 auto', height: "45px", }} alt="logo"/>
                                  
                         </ul> 
                          }
                        
                       
                       
                    </div>
            </React.Fragment>
        );
    }

export default withRouter(NavBar);
