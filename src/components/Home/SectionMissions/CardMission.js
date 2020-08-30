import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../../styles/main.scss';
import threebp from '../../../assets/images/molto/MOLTO-IT.svg';
import or from '../../../assets/images/or.png';
import moltoit from '../../../assets/images/molto/MOLTO3BP.svg';

const CardMission = (props) => {
  return (
    <React.Fragment>
      <img
        className="card__mission__image"
        src={
          props.image === 'or'
            ? or
            : props.image === 'threebp'
            ? threebp
            : moltoit
        }
        alt="typeofmission"
      />
      <h3>{props.title}</h3>
      <p className="mission__paragraph">{props.body}</p>
      <button
        disabled={props.title === 'MOLTO-3BP' ? true : false}
        style={{ opacity: props.title === 'MOLTO-3BP' ? 0.3 : 1 }}
        onClick={() => props.history.push(`/${props.image}`)}
      >
        {' '}
        {props.title === 'MOLTO-3BP' ? 'SOON' : 'START'}
      </button>
    </React.Fragment>
  );
};

export default withRouter(CardMission);
