import React, { Component} from 'react';
import '../../../styles/main.scss'
import Logo from '../../../assets/images/molto-logo.svg'
import constants from '../../../constants/cardsText'

class Left extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="SectionFooter" style={{height: "100px"}}>
                    <img src={Logo} style={{ margin: "20px 0px 0px 5px",height: "60px"}} alt="molto-logo"/>
                    <p>{constants.molto_description}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Left;
