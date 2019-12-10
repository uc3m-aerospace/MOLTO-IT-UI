import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch} from "react-redux";
import {FORM_DATA} from '../../constants'
import Coverflow from 'react-coverflow';
import Mars from '../../assets/images/mars.png'
import Earth from '../../assets/images/earth.png'
import Mercury from '../../assets/images/mercurio.png'
import Venus from '../../assets/images/venus.png'
import Uranus from '../../assets/images/uranus.png'
import Neptune from '../../assets/images/neptuno.png'
import Jupyter from '../../assets/images/jupiter.png'
import Saturn from '../../assets/images/saturn.png'

const planets = [
    {index: 0, name: 'Mercury', image: Mercury},
    {index: 1, name: 'Earth', image: Earth},
    {index: 2, name: 'Mars', image: Mars},
    {index: 3, name: 'Venus', image: Venus},
    {index: 4, name: 'Jupyter', image: Jupyter},
    {index: 5, name: 'Saturn', image: Saturn},
    {index: 6, name: 'Uranus', image: Uranus},
    {index: 7, name: 'Neptune', image: Neptune},
]

const CelestialBodies = (props) => {  
    const dispatch = useDispatch();
    const data = useSelector(state => state.moltoItData);
    const toOrFrom = props.component === 'From' ? 'planet_dep' : 'planet_arr'
    const [numberDep, setNumberDep] = useState()
    const [numberArr, setNumberArr] = useState()
    

    const _handleChange = (planet) => {
        dispatch({type: FORM_DATA, payload: {[toOrFrom]: planet.name}})
    }

    const _handleState = () => {
        if (toOrFrom === 'planet_dep') {
            planets.map((planet) => {            
                return planet.name === data.planet_dep ? setNumberDep(planet.index) : null        
            })
        } else {
            planets.map((planet) => {            
                return planet.name === data.planet_arr ? setNumberArr(planet.index) : null        
            })
        }
    };
    
    useEffect(() => {
        _handleState()
    }) 


    return <Coverflow
                    width={"100%"}
                    height={390}
                    displayQuantityOfSide={2}
                    enableHeading={true}
                    enableScroll={false}
                    navigation={false}
                    currentFigureScale={1.3}
                    otherFigureScale={0.5}
                    clickable={true}
                    active={toOrFrom === 'planet_dep' ? numberDep : numberArr}
                >
                
                {planets.map((planet, index) => 
                <div style={{outline: "none", border: "none", boxShadow: "none"}}>
                    <p>{planet.name}</p>
                    <div
                        onClick={() => _handleChange(planet)}
                        key={index} 
                        tabIndex={index}
                        style={{outline: "none", border: "none", boxShadow: "none"}}
                        role="menuitem">
                            { index === 0 ? <img src={planet.image} alt={planet.name} style={{
                                display: 'block',
                                width: '100%',
                            }}/>
                            : 
                            null 
                            }
                    </div>
                    {index !== 0 ?
                    <img onClick={() => _handleChange(planet)} src={planet.image} alt={planet.name} style={{
                        display: 'block',
                        width: '100%',
                    }}/> : null}
                </div>
                )

                }
                </Coverflow>
           
  }
  
  export default CelestialBodies;