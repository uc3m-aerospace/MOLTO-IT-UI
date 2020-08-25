import React, { useState } from 'react';
//import {useStyle} from 'react';
import './../../styles/main.scss';
import { withRouter } from 'react-router';
import Joyride from 'react-joyride';
import BackIcon from '../../assets/images/arrows/right.svg';
import SubmitIcon from '../../assets/images/arrows/submit.svg';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';
import '../../styles/main.scss';
import Level from './Level';
import LaunchWindow from './Launch';
import From from './From';
import Destination from './Destination';
import MissionType from './Mission';
import Motor from './Motor';
import FlightTtime from './FlightTime';

const MoltoIt = (props) => {
  const steps = [
    {
      disableBeacon: true,
      title: 'Code',
      target: '.moltoit__missioncode',
      content: 'This is my awesome feature!'
    },
    {
      target: '.buttonTabs',
      content: 'Here you cant start your next mission!'
    },
    {
      target: '.buttontabs',
      content: 'Here you cant start your next mission!'
    }
  ];

  return (
    <section>
      <div
        className={
          props.value === 2 || props.value === 3
            ? 'section__tabs__planets'
            : 'section__tabs'
        }
      >
        <Joyride
          run={true}
          steps={steps}
          continuous={true}
          debug={true}
          showSkipButton={true}
          showProgress={true}
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

        <Tabs variant="soft-rounded" orientation="vertical">
          <TabList>
            <Tab>Configuration</Tab>
            <Tab>Launch</Tab>
            <Tab>From</Tab>
            <Tab>Destination</Tab>
            <Tab>Mission Type</Tab>
            <Tab>Motor</Tab>
            <Tab>Flight Time</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Level value={props.value} function={props.function} />;
            </TabPanel>
            <TabPanel>
              <LaunchWindow />;
            </TabPanel>
            <TabPanel style={{ overflow: 'hidden' }}>
              <From />;
            </TabPanel>
            <TabPanel style={{ overflow: 'hidden' }}>
              <Destination />;
            </TabPanel>
            <TabPanel>
              <MissionType />;
            </TabPanel>
            <TabPanel>
              <Motor />;
            </TabPanel>
            <TabPanel>
              <FlightTtime value={props.value} function={props.function} />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <div className="tabs__button__container">
          <button className="back tabs__button">
            <img className="back__icon" src={BackIcon} alt="back" />
            <span>Back</span>
          </button>

          <button
            className="tabs__button"
            onClick={() => console.log('hola osy adelante')}
          >
            Submit
            <img className="submit__icon" src={SubmitIcon} alt="submit" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default withRouter(MoltoIt);
