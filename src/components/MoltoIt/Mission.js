import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FORM_DATA } from '../../constants';
import Rendezvous from '../../assets/images/moltoit.png';
import Flyby from '../../assets/images/flyby.png';
import { Icon, Checkbox } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import ReturnIcon from '../../assets/images/arrows/RETURN.svg';
const planets = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune'
];

const Mission = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.moltoItConfig);
  const [missionType, setMissionType] = useState(data.problem_type);
  const [minFb, setMinFb] = useState(data.n_fb[0]);
  const [maxFb, setMaxFb] = useState(data.n_fb[0]);
  const [flybyPlanets, setFlybyPlanets] = useState(data.planet_fb);

  const sendData = (min, max) => {
    let array = [];
    array.push(parseInt(minFb));
    array.push(parseInt(maxFb));
    dispatch({ type: FORM_DATA, payload: { n_fb: array } });
  };

  useEffect(() => {
    sendData(minFb, maxFb);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minFb, maxFb]);

  const handleClick = (type) => {
    if (type === 'FLYBY') {
      setMissionType('flyby');
      dispatch({ type: FORM_DATA, payload: { problem_type: 'flyby' } });
    } else {
      setMissionType('rendezvous');
      dispatch({ type: FORM_DATA, payload: { problem_type: 'rendezvous' } });
    }
  };

  const handleCheckPlanets = (event, value) => {
    let Planet = event.currentTarget.name;
    let checked = event.target.checked;

    if (!checked) {
      flybyPlanets.splice(flybyPlanets.indexOf(Planet), 1);
      setFlybyPlanets([...flybyPlanets]);
      dispatch({ type: FORM_DATA, payload: { planet_fb: flybyPlanets } });
    } else {
      flybyPlanets.push(Planet);
      setFlybyPlanets([...flybyPlanets]);
      dispatch({ type: FORM_DATA, payload: { planet_fb: flybyPlanets } });
    }
  };

  return (
    <div className="constrain">
      {missionType === 'flyby' ? (
        <React.Fragment>
          <p className="Title">PLEASE INPUT NUMBER OF FLYBYS</p>
          <div className="flyby__container">
            {planets.map((planet, index) => (
              <div className="flyby__check__container">
                <Checkbox
                  size="sm"
                  checked={flybyPlanets.includes(planet) ? true : false}
                  onChange={(event) => handleCheckPlanets(event, planet)}
                  type="checkbox"
                  id={planet}
                  name={planet}
                  borderColor={
                    flybyPlanets.includes(planet) ? 'none' : '1px solid white'
                  }
                  backgroundColor={
                    flybyPlanets.includes(planet) ? '#3a59fa' : 'transparent'
                  }
                  variantColor="#3a59fa"
                />
                <label className="flyby__label">{planet}</label>
              </div>
            ))}
          </div>

          <div className="launch__flyby">
            <div>
              <p>Minimum</p>
              <input
                value={data.n_fb[0]}
                onChange={(event) => setMinFb(event.target.value)}
                type="number"
                placeholder="Enter the min number of flybys"
              />
            </div>
            <div>&nbsp;&nbsp;&nbsp;</div>
            <div>
              <p>Maximum</p>
              <input
                value={data.n_fb[1]}
                onChange={(event) => setMaxFb(event.target.value)}
                type="number"
                placeholder="Enter the max number of flybys"
              />
            </div>
          </div>

          <button
            className="flyby__button"
            onClick={() => {
              setMissionType('');
            }}
          >
            <img className="return__icon" src={ReturnIcon} alt="return" />
            Return
          </button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p className="Title">SELECT YOUR MISSION TYPE</p>
          <div className="mission__types">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="mission__option"
              onClick={() => {
                handleClick('FLYBY');
              }}
            >
              {data.problem_type === 'flyby' ? (
                <div className="container__check">
                  <Icon name="check-circle" size="30px" color="green.400" />
                </div>
              ) : null}
              <p>Flyby</p>
              <img
                style={{ backgroundColor: 'transparent' }}
                src={Flyby}
                alt="flyby"
                width="90%"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="mission__option"
              onClick={() => {
                handleClick('RENDEZVOUS');
              }}
            >
              {data.problem_type === 'rendezvous' ? (
                <div className="container__check">
                  <Icon name="check-circle" size="30px" color="green.400" />
                </div>
              ) : null}
              <p>Rendezvous</p>

              <img
                style={{ backgroundColor: 'transparent' }}
                src={Rendezvous}
                alt="rendezvous"
                width="150px"
              />
            </motion.div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Mission;
