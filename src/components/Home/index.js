import React, { useState } from 'react';
import './../../styles/main.scss';
import SectionAbout from '../Home/SectionAbout';
import SectionMissions from '../Home/SectionMissions';
import SectionCollaboration from '../Home/SectionCollaboration';
import Joyride from 'react-joyride';
const Home = () => {
  const [steps, setSteps] = useState([
    {
      title: 'About us',
      target: '.hero__buttons',
      content: 'This is my awesome feature!',
      spotlightClicks: true
    },
    {
      title: 'About us',
      target: '.section__hero',
      content: 'Here you cant start your next mission!'
    },
    {
      title: 'Our missions',
      target: '.mission__container',
      placement: 'bottom',
      content:
        'Here you can find our mission tools. Currently, you can create a mission in MOLTO-IT. We are working on MOLTO-OR 🛰'
    },
    {
      title: 'Collaborators',
      target: '.collaborators__container',
      placement: 'bottom',
      content:
        'These persons are the responsibles for this project, we are looking forward to have more people involved with this project.'
    }
  ]);
  console.log(steps);
  return (
    <React.Fragment>
      <Joyride
        run={true}
        steps={steps}
        continuous={true}
        debug={true}
        showSkipButton={true}
        showProgress={true}
        scrollToFirstStep
        styles={{
          options: {
            arrowColor: 'white',
            backgroundColor: 'white',
            overlayColor: 'rgba(255,255,255,.5)',
            primaryColor: 'rgb(49, 130, 205)',
            textColor: 'black',
            width: 400,
            zIndex: 1000
          }
        }}
      />
      <SectionAbout />
      <SectionMissions />
      <SectionCollaboration />
    </React.Fragment>
  );
};

export default Home;
