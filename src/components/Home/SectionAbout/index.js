import React, { Component} from 'react';
import { withRouter } from "react-router";
import '../../../styles/main.scss'
import Images from '../SectionAbout/Images'
import Typer from '../SectionAbout/Typer'
import constants from '../../../constants/cardsText';
class SectionAbout extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="SectionBackground" id="About">
                   <div style={{textAlign: "center"}}>
                        <Typer
                            heading={'Making'}
                            dataText={[  
                                'Real     ', 
                                'Faster     ',
                                'Cool     ',
                                'Great     ',
                                'Real     ', 
                                'Faster     ',
                                'Cool     ',
                                'Great     '
                                ]} 
                            heading2={'Space Exploration'} 
                        />
                    </div>
                    <p>{constants.molto_description}
                    </p>
                    <Images/>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(SectionAbout);
