import React, {useState, useEffect} from 'react'
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

const Mission = (props) => {  
    const dispatch = useDispatch();
    const data = useSelector(state => state.moltoItData);
    const [missionType, setMissionType] = useState(data.mission_type)
    const [minFb, setMinFb] = useState(data.n_fb[0])
    const [maxFb, setMaxFb] = useState(data.n_fb[0])
    const [flybyPlanets, setFlybyPlanets] = useState(data.planet_fb)


    const sendData = (min, max) => {
        let array = []
        array.push(minFb)
        array.push(maxFb)
        dispatch({type: FORM_DATA, payload: {'n_fb': array }})
    }

    useEffect(() => {
        sendData(minFb, maxFb)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [minFb, maxFb])    

    const handleClick = (type) => {
        if (type === 'FLYBY') {
            setMissionType('flyby')
            dispatch({type: FORM_DATA, payload: {'problem_type': 'flyby' }})
            
        } else {
            setMissionType('rendezvous')
            dispatch({type: FORM_DATA, payload: {'problem_type': 'rendezvous' }})
        }
    }

    const handleCheckPlanets = (event, value) => {
        let Planet = event.currentTarget.name
        let checked = event.target.checked;
    
        if (!checked) {
            console.log('Borra')
            flybyPlanets.splice(flybyPlanets.indexOf(Planet), 1)
            setFlybyPlanets([...flybyPlanets])
            dispatch({type: FORM_DATA, payload: {'planet_fb': flybyPlanets}})
        } else {
            console.log('Agrega')
            flybyPlanets.push(Planet)
            setFlybyPlanets([...flybyPlanets])
            dispatch({type: FORM_DATA, payload: {'planet_fb': flybyPlanets} })
        }

        console.log(flybyPlanets) 
       
    }

    return  <React.Fragment>
                { missionType === 'flyby' ? 
                    <React.Fragment>
                      <p className="Title">PLEASE INPUT NUMBER OF FLYBYS</p>
                      <div className="Launch">
                            <div>
                                <p>Minimum</p>
                                <input value={data.n_fb[0]} onChange={(event) => setMinFb(event.target.value)}  type="number" placeholder="Enter the min number of flybys"/>
                            </div>
                            <div>&nbsp;&nbsp;&nbsp;</div>
                            <div>
                                <p>Maximum</p>
                                <input value={data.n_fb[1]} onChange={(event) => setMaxFb(event.target.value)}  type="number" placeholder="Enter the max number of flybys"/>
                            </div>
                            <div style={{display:'flex', flexDirection: 'column'}}>
                            
                            {planets.map((planet, index) => 
                                <React.Fragment>
                                    <div style={{display:'flex', flexDirection: 'row'}}>
                                        <input className="inputPlanets" checked={flybyPlanets.includes(planet) ? true : false} onChange={(event) => handleCheckPlanets(event, planet)} type="checkbox" id={planet} name={planet}/>
                                        <label className="labelPlanets" style={{color: 'white'}}>{planet}</label>        
                                    </div>
                                </React.Fragment>   
                            )}
                            
                          </div>
                      </div>
                      <button onClick={() => {setMissionType('')}}>return</button>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <p className="Title">SELECT YOUR MISSION TYPE</p>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <button onClick={() => {handleClick('FLYBY')}}>FLYBY</button>
                            <button style={{opacity: missionType === 'rendezvous' ? 0.7 : null}} onClick={() => {handleClick('RENDEZVOUS')}}>RENDEZVOUS</button>
                        </div>
                    </React.Fragment>
                 
                }
            </React.Fragment>
  }
  
  export default Mission;