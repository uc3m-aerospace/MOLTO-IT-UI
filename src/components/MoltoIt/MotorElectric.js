import React, {useState} from 'react'
import { useSelector, useDispatch} from "react-redux";
import {FORM_DATA} from '../../constants'
import nstar from '../../assets/images/nstar.png'
import pps1350 from '../../assets/images/pps1350.png'
import hermes from '../../assets/images/hermes.png'

const motors = [
    {
        name: 'NSTAR',
        description: '',
        specificImpulse: 2600,
        specificImpulseUnits: 's',
        maxThrust: 586,
        maxThrustUnits: 'mN',
        image: nstar,
    },
    {
        name: 'PPS-1350',
        description: '',
        specificImpulse: 2600,
        specificImpulseUnits: 's',
        maxThrust: 586,
        maxThrustUnits: 'mN',
        image: pps1350,
    },
    { 
        name: 'HERMeS',
        description: 'The NASA Hall Effect Rocket with Magnetic Shielding (HERMeS) 12.5 kW Technology Demons-tration Unit-1 (TDU-1) Hall thruster has been the subject of extensive technology maturation in preparation for development into a flight ready propulsion system.',
        specificImpulse: 2600,
        specificImpulseUnits: 's',
        maxThrust: 586,
        maxThrustUnits: 'mN',
        image: hermes,
    }
]

const MotorElectric = (props) => {  
    const dispatch = useDispatch();
    const data = useSelector(state => state.moltoItData);
    const [currentMotor, setCurrentMotor] = useState({
        name: data.motor,
        description: '',
        specificImpulse: data.specificImpulse,
        specificImpulseUnits: data.specificImpulseUnits,
        maxThrust: '0',
        maxThrustUnits: 'mN',
        image: '',
    })

    const handleClick = (motor) => {
        setCurrentMotor(motor)
        dispatch({type: FORM_DATA, payload: {'Isp': motor.specificImpulse}})
        dispatch({type: FORM_DATA, payload: {'nthrusters': 1}})
        dispatch({type: FORM_DATA, payload: {'motor': motor.name}})
        dispatch({type: FORM_DATA, payload: {'motorType': 'Electric'}})
    }
    return  <React.Fragment >
        {motors.map((motor_) => 
            <div style={{backgroundColor: currentMotor.name === motor_.name ? '#70C483' : null, opacity: currentMotor.name === motor_.name ? '0.9' : null, width: "100%", height:"100%"}} onClick={() => handleClick(motor_)}>
                <div>
                    <p className="TitleMotor"> {motor_.name}</p>
                </div>
                <img src={motor_.image} style={{width: motor_.name === 'NSTAR' ? '50%' : '80%',  height: motor_.name === 'NSTAR' ? '50%' : '80%', marginTop: "30px"}} alt='motors'/>
                <div style={{height: '200px'}}/>
            </div>
            )
        }
            </React.Fragment>
  }
  
  export default MotorElectric;