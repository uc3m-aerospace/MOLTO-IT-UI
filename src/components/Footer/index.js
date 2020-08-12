import React, { Component} from 'react';
import './../../styles/main.scss'
import Left from '../Footer/Left'
import Rigth from '../Footer/Rigth'
import Center from '../Footer/Center'
import Center1 from '../Footer/Center_1'
import Center2 from '../Footer/Center_2'

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <div style={{width: "100%", height: "2px", backgroundColor: "white", alignSelf: "center"}}/>
                    <footer className="footer" id="Contact">
                        <Left/>
                        <Center/>
                        <Center1/>
                        <Center2/>
                        <Rigth/>
                    </footer>
                    <div style={{height: "60px", display: "flex",  alignItems: "center", flexDirection: "row", justifyContent: "center"}}>
                        <p style={{ display: "flex", color:"white",  alignSelf: "center", fontFamily:"HelveticaLT"}}>© Universidad Carlos III de Madrid</p>
                        <span style={{ height: "100%" ,display: "flex", alignItems: "center", marginLeft: "10px", marginRight: "10px", color: "white"}}>|</span>
                        <p style={{display: "flex", color:"white",  alignItems: "center", fontFamily:"HelveticaLT"}}>Aviso de Privacidad</p>
                    </div>
            </React.Fragment>
        );
    }
}

export default Footer;
