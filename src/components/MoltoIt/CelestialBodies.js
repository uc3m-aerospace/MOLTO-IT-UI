import React, {useState} from 'react'
import { useSelector, useDispatch} from "react-redux";
import {FORM_DATA} from '../../constants'

const planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
]

const CelestialBodies = (props) => {  
    const dispatch = useDispatch();
    const data = useSelector(state => state.moltoItData);
    const toOrFrom = props.component === 'From' ? 'planet_dep' : 'planet_arr'
    const [selectedPlanet, setSelectedPlanet] = useState(data[toOrFrom])

    const handleChange = (event) => {
        setSelectedPlanet(event.target.value)
        dispatch({type: FORM_DATA, payload: {[toOrFrom]: event.target.value }})
    }

    return  <React.Fragment>
                <select value={selectedPlanet} onChange={(event) => handleChange(event)}>
                    {planets.map((planet, index) => <option key={index} value={planet}>{planet}</option>)}
                </select>                   
            </React.Fragment>
  }
  
  export default CelestialBodies;