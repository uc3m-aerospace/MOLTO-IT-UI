import React from 'react';
import '../../../styles/main.scss'

const CardCollaborators = (props) => {
<<<<<<< HEAD
  
=======
  console.log(props.image)
>>>>>>> 2c84f0c9035324148407ba22b65462fb7eb25e69
  return  <React.Fragment>
                <img src={props.image} alt="image_collaborator"/>
                <h3>{props.name}</h3>
                <p>{props.body}</p>
          </React.Fragment>
}

export default CardCollaborators;
