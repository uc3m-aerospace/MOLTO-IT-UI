import React from 'react';
import '../../../styles/main.scss';
import Card from '../SectionMissions/CardMission';
import constants from '../../../constants/cardsText.js';

const Missions = () => {
  return (
    <React.Fragment>
      <div className="section__mission">
        <div className="mission__card">
          <Card title="MOLTO-IT" body={constants.molto_it} image="threebp" />
        </div>
        <div className="mission__card">
          <Card title="MOLTO-3BP" body={constants.molto_3bp} image="moltoit" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Missions;
