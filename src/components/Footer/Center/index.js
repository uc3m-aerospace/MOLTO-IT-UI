import React, { Component} from 'react';
import '../../../styles/main.scss'
import uc3m from '../../../assets/images/uc3m_white.png'
import aerospace from '../../../assets/images/aerospace.png'
class Center extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="SectionFooter">
                    <img src={uc3m} style={{margin: "50px 0px 0px 25px",height: "55px"}} alt="uc3m"/>
                    <img src={aerospace} style={{ margin: "20px 0px 0px 25px",height: "55px"}} alt="logo-department"/>
                </div>
            </React.Fragment>
        );
    }
}

export default Center;
