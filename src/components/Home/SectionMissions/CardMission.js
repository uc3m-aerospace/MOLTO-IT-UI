import React from 'react';
import {withRouter} from 'react-router-dom';
import '../../../styles/main.scss'
import threebp from '../../../assets/images/3bp.png'
import or from '../../../assets/images/or.png'
import moltoit from '../../../assets/images/moltoit.png'

const CardMission = (props) => {  
  return  <React.Fragment>
                <h3>{props.title}</h3>
                <img style={{alignSelf: "center"}} src={props.image === "or" ? or : props.image === "threebp" ? threebp : moltoit} alt="typeofmission"/>
                <p>{props.body}</p>
                <button onClick={() => props.history.push(`/${props.image}`)}>START</button>
          </React.Fragment>
}


export default withRouter(CardMission);
