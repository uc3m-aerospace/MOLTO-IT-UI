import React, { Component} from 'react';
import './../../styles/main.scss'
import NavBar from './NavBar';

class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <div style={{
                        width: "90%",
                        height: "2px",
                        backgroundColor: "white", 
                        alignSelf: "center", 
                        // if header sticked to top
                        // position: "sticky", 
                        // top: 90,
                        // zIndex: 99999
                }}/>
            </React.Fragment>
        );
    }
}

export default Header;
