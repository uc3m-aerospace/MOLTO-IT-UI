import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch} from "react-redux";
import {FORM_DATA} from '../../constants'
import Rendezvous from '../../assets/images/moltoit.png'
import Flyby from '../../assets/images/flyby.png'

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
    const [missionType, setMissionType] = useState(data.problem_type)
    const [minFb, setMinFb] = useState(data.n_fb[0])
    const [maxFb, setMaxFb] = useState(data.n_fb[0])
    const [flybyPlanets, setFlybyPlanets] = useState(data.planet_fb)


    const sendData = (min, max) => {
        let array = []
        array.push(parseInt(minFb))
        array.push(parseInt(maxFb))
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
<<<<<<< HEAD
=======
            console.log('Borra')
>>>>>>> 2c84f0c9035324148407ba22b65462fb7eb25e69
            flybyPlanets.splice(flybyPlanets.indexOf(Planet), 1)
            setFlybyPlanets([...flybyPlanets])
            dispatch({type: FORM_DATA, payload: {'planet_fb': flybyPlanets}})
        } else {
<<<<<<< HEAD
=======
            console.log('Agrega')
>>>>>>> 2c84f0c9035324148407ba22b65462fb7eb25e69
            flybyPlanets.push(Planet)
            setFlybyPlanets([...flybyPlanets])
            dispatch({type: FORM_DATA, payload: {'planet_fb': flybyPlanets} })
        }
<<<<<<< HEAD
=======

        console.log(flybyPlanets) 
       
>>>>>>> 2c84f0c9035324148407ba22b65462fb7eb25e69
    }

    return  <React.Fragment>
                { missionType === 'flyby' ? 
                    <React.Fragment>
                      <p className="Title">PLEASE INPUT NUMBER OF FLYBYS</p>
                      <div className="Launch">
                            <div  style={{marginLeft: "80px"}}>
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

                            <div style={{display: 'flex', flexDirection: 'column', width: "100%",  border: data.problem_type === 'flyby' ?  "1px solid #70C483" : null, backgroundColor: "transparent", opacity: data.problem_type === 'flyby' ? 0.9 : null}}>
                                <p>Flyby</p>                    
                                <button style={{outline: "none", width: "50%", backgroundColor: "transparent"}}><img style={{backgroundColor:"transparent"}} src={Flyby} alt="flyby" width="80%" onClick={() => {handleClick('FLYBY')}}/></button>
                            </div>
                            
                            <div style={{display: 'flex', flexDirection: 'column',  width: "100%", border:  data.problem_type === 'rendezvous' ?  "1px solid #70C483" : null, backgroundColor: "transparent", opacity: data.problem_type === 'rendezvous' ? 0.9 : null}}>                    
                                <p>Rendezvous</p>
                                <button style={{outline: "none", height: "90%", backgroundColor: "transparent"}}><img style={{backgroundColor: "transparent", transform: "translateX(-16px)"}} src={Rendezvous}  alt="rendezvous" width="125%" onClick={() => {handleClick('RENDEZVOUS')}}/></button>
                            </div>                    
                            
                        </div>
                    </React.Fragment>
                 
                }
            </React.Fragment>
  }
  
  export default Mission;