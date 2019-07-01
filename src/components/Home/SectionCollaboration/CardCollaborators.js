import React, { Fragment } from 'react';
import '../../../styles/main.scss'
import ejemplo from '../../../assets/images/ejemplo.jpg'

const CardCollaborators = (props) => {
  return  <React.Fragment>
                <img src={ejemplo}/>
                <h3>{props.name}</h3>
                <p>{props.body}</p>
          </React.Fragment>
}

export default CardCollaborators;
