import React, { Component} from 'react';
import { withRouter } from "react-router";
import '../../../styles/main.scss'
import Images from '../SectionAbout/Images'
//import Typer from '../SectionAbout/Typer'
//import constants from '../../../constants/cardsText';
import { Skeleton } from "@chakra-ui/core";
import Hero from './Hero'

class SectionAbout extends Component {

    render() {
        return (
            
            <React.Fragment>
                
                    <div className="SectionBackground" style={{height: "600px"}}id="About">
                        {/*<Images/>*/}
                        <Hero/>
                    </div>
                
            </React.Fragment>
        );
    }
}

export default withRouter(SectionAbout);
