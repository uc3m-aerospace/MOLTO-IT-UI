import React, { Component} from 'react';
import { withRouter } from "react-router";
import '../../../styles/main.scss'
import Images from '../SectionAbout/Images'
//import Typer from '../SectionAbout/Typer'
//import constants from '../../../constants/cardsText';
class SectionAbout extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="SectionBackground" id="About">
                    <Images/>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(SectionAbout);
