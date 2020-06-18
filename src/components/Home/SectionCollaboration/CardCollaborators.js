import React from 'react';
import '../../../styles/main.scss'

const CardCollaborators = (props) => {

  return  <React.Fragment>
                <img src={props.image} alt="image_collaborator"/>
                <h3>{props.name}</h3>
                <p>{props.body}</p>
          </React.Fragment>
}

export default CardCollaborators;
