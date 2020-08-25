import React, { Component } from 'react';
import './../../styles/main.scss';
import Left from '../Footer/Left';
import Rigth from '../Footer/Rigth';
import Center from '../Footer/Center';
import Center1 from '../Footer/Center_1';
import Center2 from '../Footer/Center_2';

class Footer extends Component {
  render() {
    return (
      <section>
        <footer className="footer" id="Contact">
          <Left />
          <Center />
          <Center1 />
          <Center2 />
          <Rigth />
        </footer>
        <div className="footer__copyright">
          <p>© Universidad Carlos III de Madrid</p>
          <span>|</span>
          <p>Aviso de Privacidad</p>
        </div>
      </section>
    );
  }
}

export default Footer;
