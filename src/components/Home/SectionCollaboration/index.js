import React from 'react';
import '../../../styles/main.scss';

import Collaboration from '../SectionCollaboration/Collaborators';
const SectionCollaboration = () => {
  return (
    <section className="collaborators__container">
      <p className="paragraph">Collaboration</p>
      <Collaboration />
    </section>
  );
};

export default SectionCollaboration;
