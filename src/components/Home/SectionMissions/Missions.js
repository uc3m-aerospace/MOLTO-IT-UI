import React, { Fragment } from 'react';
import '../../../styles/main.scss'
import Card from '../SectionMissions/CardMission'
import constants from '../../../constants/cardsText.js'
const Missions = () => {
  return  <React.Fragment>
            <div className="SectionMissions">
                <div className="CardMission">
                    <Card title="MOLTO-IT" body={constants.molto_it} image="moltoit"/>
                </div>
                <div className="CardMission">
                    <Card title="MOLTO-OR" body={constants.molto_or} image="or"/>
                </div>
                <div className="CardMission">
                    <Card title="MOLTO-3BP" body={constants.molto_3bp} image="threebp"/>
                </div>
            
            </div>
          </React.Fragment>
}

export default Missions;
