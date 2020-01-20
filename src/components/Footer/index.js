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
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <p style={{color:"white", margin: "0px 0px 10px 50px", fontFamily:"HelveticaLT", fontSize: "12px"}}>© Universidad Carlos III de Madrid</p>
                        <p style={{color:"white", margin: "0px 0px 10px 50px", fontFamily:"HelveticaLT", fontSize: "12px"}}>Aviso de Privacidad</p>
                    </div>
            </React.Fragment>
        );
    }
}

export default Footer;
