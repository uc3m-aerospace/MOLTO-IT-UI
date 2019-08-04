import React, { Component} from 'react';
import '../../../styles/main.scss'
import Logo from '../../../assets/images/MOLTO-BLANCO.png'
import constants from '../../../constants/cardsText'

class Left extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="SectionFooter">
                    <img src={Logo} style={{ margin: "20px 0px 0px 5px",height: "45px"}} alt="molto-logo"/>
                    <p>{constants.molto_description}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Left;
