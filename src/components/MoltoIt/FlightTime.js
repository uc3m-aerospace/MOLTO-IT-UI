import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch} from "react-redux";
import {FORM_DATA} from '../../constants'
import Switch from "react-switch";
import { withMoltoItClient } from './../apiHOCs';


const FlightTime = ({ moltoItApiClient, newProps}) => {  
     
    const dispatch = useDispatch();
    const data = useSelector(state => state.moltoItData);
    const [min, setMin] = useState(data.ToF[0])
    const [max, setMax] = useState(data.ToF[1])
    const [loader, setLoader] = useState(false)
    const [checked, setChecked] = useState(false)
    const [type, setType] = useState(data.ToF_type)
   

    const fetch = async (data) => {
        
        delete data['ToF_type'];
        delete data['motor'];
        delete data['motorType'];
        if (data['response']) {
            return delete data['response']
        }

        try {
            const res = await moltoItApiClient.getPareto(data);            
        } catch (error) {
            console.log(error)
        }
    };


    const sendFlightTime = (min, max) => {
        let threshold = []
        threshold.push(min)
        threshold.push(max)
        dispatch({type: FORM_DATA, payload: {'ToF': threshold} })
    }


    const handleChange = () => {
        if (!checked) {
            setChecked(true)
            setType('years')
            dispatch({type: FORM_DATA, payload: {'ToF_type': 'years'} })
        }   else {
            setChecked(false)
            setType('days')
            dispatch({type: FORM_DATA, payload: {'ToF_type': 'days'} })
        }     

    }

    useEffect(() => {
        sendFlightTime(min,max)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [min, max])

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleClick = async () => {
        fetch(data);
        setLoader(true)
        await sleep(1000);
        setLoader(false)
        newProps.function(null, newProps.value !== 7 ? newProps.value + 1 : 0)
    }

return  <React.Fragment>
                { loader ?
                <div>
                    <div style={{backgroundColor: 'black', opacity: 0.9, position: "absolute", zIndex: 995, top: 0, right: 0, bottom: 0, left: 0}}></div>
                    <img style={{position: 'absolute', width: "10%", left: "45%", top:"22%", zIndex: 999}} src={'https://d2vrnm4zvhq6yi.cloudfront.net/assets/loader_puntos-df9857dfaf7eeb01c9cb2c2d1d208a8365ea4cdab85e1adeadaceff0c8f27964.gif'} alt="loading..." />
                </div>  
                    : 
                    null
                }
                <p className="Title">FLIGHT TIME</p> 
                <label> 
                    <Switch 
                        onChange={() => handleChange()} 
                        checked={checked}
                        offColor="#70C483"
                        onColor="#70C483" 
                        uncheckedIcon={
                            <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 8,
                                color: "white",
                                paddingRight: 2
                            }}
                            >
                            Days
                            </div>
                        }
                        checkedIcon={
                            <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 8,
                                color: "white",
                                paddingRight: 2
                            }}
                            >
                            Years
                            </div>
                        }
                    />
                </label>
                <div className="Launch">
                        <div>
                            <p>Minimum</p>
                            <input type="number" value={min} onChange={(event) => setMin(event.target.value)} placeholder="Enter the min number of flybys"/>
                        </div>
                        <div>&nbsp;&nbsp;&nbsp;</div>
                        <div>
                            <p>Maximum</p>
                            <input type="number" value={max} onChange={(event) => setMax(event.target.value)} placeholder="Enter the max number of flybys"/>
                        </div>
                    </div>

                    <button className="newButton" onClick={() => handleClick()}>SEND</button>
                    </React.Fragment>
  }

export default withMoltoItClient(FlightTime);
