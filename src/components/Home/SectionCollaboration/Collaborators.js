import React, { Fragment } from 'react';
import '../../../styles/main.scss'
import Card from '../SectionCollaboration/CardCollaborators'
import constants from '../../../constants/cardsText.js'

const Missions = () => {
  return  <React.Fragment>
            <div className="SectionCollaboration">
                <div className="CardCollaborators">
                    <Card name="Brandon Escamilla" body={constants.bio}/>
                </div>
                <div className="CardCollaborators">
                    <Card name="David Morante" body={constants.bio}/>
                </div>
                <div className="CardCollaborators">
                    <Card name="Mario Merino" body={constants.bio}/>
                </div>
            </div>
          </React.Fragment>
}

export default Missions;
