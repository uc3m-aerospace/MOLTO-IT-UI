import React from 'react';
import '../../../styles/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const CardCollaborators = (props) => {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <img src={props.image} alt="image_collaborator" />
      {props.linkedin ? (
        <a
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}
          href={props.linkedin}
        >
          <FontAwesomeIcon
            style={{ color: '#0e76a8' }}
            icon={faLinkedin}
            size="1x"
          />
          <span
            style={{
              fontFamily: 'AvertaRegular',
              color: 'white',
              marginLeft: '10px'
            }}
          >
            {props.name}
          </span>
        </a>
      ) : null}
      {props.twitter ? (
        <a
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}
          href={props.twitter}
        >
          <FontAwesomeIcon
            style={{ color: '#0e76a8' }}
            icon={faTwitter}
            size="1x"
          />
          <span
            style={{
              fontFamily: 'AvertaRegular',
              color: 'white',
              marginLeft: '10px'
            }}
          >
            {props.name}
          </span>
        </a>
      ) : null}
      <p>{props.body}</p>
    </React.Fragment>
  );
};

export default CardCollaborators;
