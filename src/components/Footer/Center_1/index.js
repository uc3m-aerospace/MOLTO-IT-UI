import React, { Component } from 'react';
import '../../../styles/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Center_1 extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="SectionFooter" style={{ height: '80px' }}>
          <h3>Contact</h3>
          <div
            style={{
              display: 'block',
              width: '60%',
              height: '2px',
              backgroundColor: 'white',
              alignSelf: 'center',
              margin: '0px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          />

          <ul className="fixedIconsFooter" style={{ padding: 0 }}>
            <li>
              <a href="https://github.com/uc3m-aerospace/MOLTO-IT">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </li>
            <p style={{ margin: '0px', paddingTop: '5px' }}>
              <a style={{ color: 'white' }} href="mailto:molto.space@gmail.com">
                molto.space@gmail.com
              </a>
            </p>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Center_1;
