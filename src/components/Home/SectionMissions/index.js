import React from 'react';
import '../../../styles/main.scss';
import Missions from './Missions';

const SectionMissions = () => {
  return (
    <section className="mission__container" id="Missions">
      <div
        style={{
          width: '90%',
          height: '2px',
          backgroundColor: 'white',
          alignSelf: 'center'
        }}
      />

      <p className="paragraph">Space Missions</p>
      <Missions />
    </section>
  );
};

export default SectionMissions;
