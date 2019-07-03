import React, { Fragment } from 'react';
import '../../../styles/main.scss'

const CardCollaborators = (props) => {
  console.log(props.image)
  return  <React.Fragment>
                <img src={props.image}/>
                <h3>{props.name}</h3>
                <p>{props.body}</p>
          </React.Fragment>
}

export default CardCollaborators;
