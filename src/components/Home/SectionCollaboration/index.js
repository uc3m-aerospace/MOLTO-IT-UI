import React, { Component} from 'react';
import '../../../styles/main.scss'

import Collaboration from '../SectionCollaboration/Collaborators'
class SectionCollaboration extends Component {
    
    render() {
        
   
        return (
            <React.Fragment>
                <div style={{width: "90%", height: "2px", backgroundColor: "white", alignSelf: "center"}}/>
                <div className="SectionBackground" id="Collaboration">
                      <p className="paragraph" >Collaboration</p>
                      <Collaboration/>
                </div>
            </React.Fragment>
        );
    }
}

export default SectionCollaboration;
