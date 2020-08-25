import React from 'react';
import '../../../styles/main.scss';
import Missions from './Missions';

const SectionMissions = () => {
  return (
    <section className="mission__container" id="Missions">
      <p className="paragraph">Space Missions</p>
      <Missions />
    </section>
  );
};

export default SectionMissions;
