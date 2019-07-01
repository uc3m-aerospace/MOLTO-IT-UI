import React, { Component} from 'react';
import '../../../styles/main.scss'
import Missions from './Missions'
class SectionMissions extends Component {

    render() {
        return (
            <React.Fragment>
                <div style={{width: "90%", height: "2px", backgroundColor: "white", alignSelf: "center"}}/>
                <div className="SectionBackground" id="Missions">
                      <p className="paragraph">Space Missions</p>
                      <Missions/>
                </div>
            </React.Fragment>
        );
    }
}

export default SectionMissions;
