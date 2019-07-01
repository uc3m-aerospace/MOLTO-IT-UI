import React, { Component} from 'react';
import './../../styles/main.scss'
import NavBar from './NavBar';

class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <div style={{width: "90%", height: "2px", backgroundColor: "white", alignSelf: "center"}}/>
            </React.Fragment>
        );
    }
}

export default Header;
