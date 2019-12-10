import React, { Component} from 'react';
import './../../styles/main.scss'
import SectionAbout from '../Home/SectionAbout'
import SectionMissions from '../Home/SectionMissions'
import SectionCollaboration from '../Home/SectionCollaboration'
import { withRouter } from "react-router";

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                      <SectionAbout />
                      <SectionMissions/>
                      <SectionCollaboration/>
            </React.Fragment>
        );
    }
}

export default withRouter(Home);
