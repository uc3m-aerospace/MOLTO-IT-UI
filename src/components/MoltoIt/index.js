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
import { useWindowSize } from '../../components/Hooks/useWindowSize';

const HeaderTabList = [
  'Configuration',
  'Launch',
  'From',
  'Destination',
  'Maneuvers',
  'Motor',
  'Flight Time'
];

const MoltoIt = (props) => {
  const size = useWindowSize();
  const [index, setIndex] = useState(0);

  const handleIndex = (i) => {
    setIndex(i);
  };

  return (
    <section>
      <div
        style={
          index === 2 || index === 3 || index === 5
            ? { maxWidth: '900px' }
            : null
        }
        className="section__tabs"
      >
        <Tabs
          defaultIndex={0}
          onChange={(i) => handleIndex(i)}
          index={index}
          variant="line"
          isFitted="True"
        >
          {size.width > 1024 ? (
            <TabList height="50px">
              {HeaderTabList.map((Title) => {
                return (
                  <Tab
                    color="white"
                    width="90px"
                    fontSize="AvertaRegular"
                    _selected={{
                      color: 'white',
                      bg: 'transparent',
                      borderBottom: '3px solid',
                      borderBottomColor: '#3a59fa'
                    }}
                  >
                    {Title}
                  </Tab>
                );
              })}
            </TabList>
          ) : null}

          <TabPanels>
            <TabPanel data-id="tab_level">
              <Level handleIndex={handleIndex} />;
            </TabPanel>
            <TabPanel data-id="tab_launch">
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
              <FlightTtime />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <div className="tabs__button__container">
          {index === 0 ? null : (
            <button
              className="back tabs__button"
              onClick={() => setIndex(index - 1)}
            >
              <img className="back__icon" src={BackIcon} alt="back" />
              <span>Back</span>
            </button>
          )}
          {index === 6 ? null : (
            <button
              className="tabs__button"
              id="submit"
              onClick={() => setIndex(index + 1)}
            >
              Submit
              <img className="submit__icon" src={SubmitIcon} alt="submit" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default withRouter(MoltoIt);
