import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FORM_DATA } from '../../constants';
import nstar from '../../assets/images/nstar.png';
import pps1350 from '../../assets/images/pps1350.png';
import hermes from '../../assets/images/hermes.png';
import { motion } from 'framer-motion';
import { Icon } from '@chakra-ui/core';

const motors = [
  {
    name: 'NSTAR',
    description: '',
    specificImpulse: 2600,
    specificImpulseUnits: 's',
    maxThrust: 586,
    maxThrustUnits: 'mN',
    image: nstar
  },
  {
    name: 'PPS-1350',
    description: '',
    specificImpulse: 2600,
    specificImpulseUnits: 's',
    maxThrust: 586,
    maxThrustUnits: 'mN',
    image: pps1350
  },
  {
    name: 'HERMeS',
    description:
      'The NASA Hall Effect Rocket with Magnetic Shielding (HERMeS) 12.5 kW Technology Demons-tration Unit-1 (TDU-1) Hall thruster has been the subject of extensive technology maturation in preparation for development into a flight ready propulsion system.',
    specificImpulse: 2600,
    specificImpulseUnits: 's',
    maxThrust: 586,
    maxThrustUnits: 'mN',
    image: hermes
  }
];

const MotorElectric = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.moltoItConfig);
  const [currentMotor, setCurrentMotor] = useState({
    name: data.motor,
    description: '',
    specificImpulse: data.specificImpulse,
    specificImpulseUnits: data.specificImpulseUnits,
    maxThrust: '0',
    maxThrustUnits: 'mN',
    image: ''
  });

  const handleClick = (motor) => {
    setCurrentMotor(motor);
    dispatch({ type: FORM_DATA, payload: { Isp: motor.specificImpulse } });
    dispatch({ type: FORM_DATA, payload: { nthrusters: 1 } });
    dispatch({ type: FORM_DATA, payload: { motor: motor.name } });
    dispatch({ type: FORM_DATA, payload: { motorType: 'Electric' } });
  };

  return (
    <div className="motor__container__electric">
      {motors.map((motor_) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="motor__option"
          onClick={() => handleClick(motor_)}
        >
          {currentMotor.name === motor_.name ? (
            <div className="container__check">
              <Icon name="check-circle" size="30px" color="green.400" />
            </div>
          ) : null}

          <p className="TitleMotor"> {motor_.name}</p>

          <img
            src={motor_.image}
            style={{
              width: motor_.name === 'NSTAR' ? '50%' : '60%',
              height: motor_.name === 'NSTAR' ? '50%' : '60%',
              marginTop: '10px'
            }}
            alt="motors"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default MotorElectric;
