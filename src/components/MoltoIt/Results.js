import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import {
    ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
} from 'recharts';
import { useSelector, useDispatch} from "react-redux";
import {FORM_DATA} from '../../constants'
import { withMoltoItClient } from './../apiHOCs';


const Results = ({ moltoItApiClient, newProps}) => {  
    const [generation, setGeneration] = useState([])    
    const [generationtwo, setGenerationTwo] = useState([])    
    const [lastGeneration, setLastGeneration] = useState('')
    const [loader, setLoader] = useState(true)
    const moltoItData = useSelector(state => state.moltoItData);
    const dispatch = useDispatch();

const handleParetoPoint = (index) => {
    dispatch({type: FORM_DATA, payload: {'plot': index }})
}

const data_pretty = {
    'Problem Type:': moltoItData.problem_type,
    'Departure Body:': moltoItData.planet_dep,
    'Arrival Body:': moltoItData.planet_arr,
    'Available planets:': JSON.stringify(moltoItData.planet_fb), //'[4,3,2]',
    'Min. Flyby Altitude:': moltoItData.rfb_min, //200,
    'Min/Max # of possible flybys:': JSON.stringify(moltoItData.n_fb), //'[0,3]',
    'Min/Max # of possible Revs:': JSON.stringify(moltoItData.rev), //[0,0],
    'Min/Max transfer time/leg:': JSON.stringify(moltoItData.ToF), // '[100, 1000]',
    'Motor:': moltoItData.motor, //Get data from other tab
    'Type of Motor:': moltoItData.motorType, //Get data from other tab
    'Specific Impulse:': moltoItData.Isp, //2600,
    'Number of Thrusters:': moltoItData.nthrusters, // 1,
    'Mass:': moltoItData.mass, //1000,
    'Power:': moltoItData.power, //5000,
    'Initial Date:': JSON.stringify(moltoItData.Initial_Date)//'["03-01-01","03-12-31"]'
}
    
const arrayToJson = (json) => {

    let result = [];
    let result_1 = [];

    delete json[Object.keys(json).length-1]
    
    Object.entries(json).map(([key, val]) => {
        let jsonItem1 = {}
        val.map((value, index) => {
            jsonItem1[index === 0 ? 'x' : index === 1 ? 'y' : 'z' ] = value
            return 'ok'
        })
        result.push(jsonItem1)

        result_1 =  result.filter(function (item) {
            
            return item['z'].includes("-1");
        });
        return ''
    })
    setGenerationTwo(result_1)
    setGeneration(result)
}

useEffect(() => {
    const socket = io('https://163.117.179.251',  {'sync disconnect on unload': true }, {transports: ['polling']})

    socket.on('connect', () => {
        
        console.log("Socket Connected.")
        
        socket.emit('on_connect_data', {"problem_name": moltoItData.problem_name, "generations": moltoItData.maxGen})

        socket.on('tmp', (data) => {
            setLoader(true)
            if (data.isAnyFile === false) {
                console.log("There is no information.")
            } else if (data[10] === moltoItData.maxGen) {   
                console.log('Succesful Optimization')
            }
            else {
                setLoader(false)
                arrayToJson(data)
                setLastGeneration(data[Object.keys(data).sort().pop()])
            }

        })
    });
    return () => socket.connect()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [generation]); 


const fetch = async (data) => {
        
    delete data['ToF_type'];
    delete data['motor'];
    delete data['motorType'];
    if (data['response']) {
        return delete data['response']
    }

    try {
        const res = await moltoItApiClient.getOrbits(data);
        return dispatch({type: FORM_DATA, payload: {'response': `data:${res.headers['content-type'].toLowerCase()};base64,` + res.data}})
    } catch (error) {
        console.log(error)
    }
};

const handleClick = async () => {
    fetch(moltoItData);
    newProps.function(null, newProps.value !== 8 ? newProps.value + 1 : 0)
}

   return  <div className="constrain">
           { loader ?
                    <div>
                        <div style={{backgroundColor: 'black', opacity: 0.9, position: "absolute", zIndex: 995, top: 0, right: 0, bottom: 0, left: 0}}></div>
                        <img style={{position: 'absolute', width: "10%", left: "45%", top:"22%", zIndex: 999}} src={'https://d2vrnm4zvhq6yi.cloudfront.net/assets/loader_puntos-df9857dfaf7eeb01c9cb2c2d1d208a8365ea4cdab85e1adeadaceff0c8f27964.gif'} alt="loading..." />
                    </div>  
                        : 
                        null
            }
            <p className="Title">PARETO FRONT</p>
            <div className="ParetoContainer">
                
                <div style={{flex: 1, backgroundColor:"transparent"}}>
                    <div className="paretoTables">
                        <p className='ParetoTitles'>Preview</p>
                            {Object.entries(data_pretty).map(([key, value]) => {
                                return  <div key={key} style={{flexDirection: 'row', height: "5%",display: 'flex'}}>
                                            <p className='ParetoContent'>{key}</p>
                                            <p className='ParetoContentR'>{value}</p>                        
                                        </div>  
                            })
                            }
                    </div>    
                </div>
                
                <div style={{flex: 3, backgroundColor:"transparent"}}>
                    <div className="paretoTables">
                        <ResponsiveContainer>
                            <ScatterChart
                                width={400}
                                height={400}
                                margin={{
                                top: 20, right: 40, bottom: 20, left: 10,
                                }}
                            >
                                <CartesianGrid />
                                <XAxis type="number" dataKey="x" name="ToF (Years)"/>
                                <YAxis type="number" dataKey="y" name="mp/m0" />
                                <Tooltip cursor={{ strokeDasharray: '4 4' }} />
                                <Legend />
                                <Scatter name="0 Flyby" data={generation} fill="#8884d8" shape="circle" />
                                <Scatter name="1 Flybys" data={generationtwo} fill="#82ca9d" shape="circle" />
                            </ScatterChart>
                        </ResponsiveContainer>
                    </div>    
                </div>
                
                <div style={{flex: 1, backgroundColor:"transparent"}}>
                    <div className="paretoTables">
                        <p className='ParetoTitles'>Please select one pareto point once the process is finished</p>
                        <table className="ParetoTable">
                            <thead>
                                <tr>
                                    <th><b>mp/m0</b></th>
                                    <th><b>Years</b></th>
                                </tr>
                            </thead> 
                            <tbody>
                                {generation.map((value, index) => {  
                                    return <React.Fragment key={index}>
                                            <tr onClick={() => { handleParetoPoint(index+1)}} key={index}>
                                                <td style={{backgroundColor: moltoItData.plot-1 === index ? '#70C483' : null, opacity: moltoItData.plot-1 === index ? 0.9 : null}}>{value['y']}</td>
                                                <td style={{backgroundColor: moltoItData.plot-1 === index ? '#70C483' : null, opacity: moltoItData.plot-1 === index ? 0.9 : null}}>{value['x']}</td>
                                            </tr>
                                        </React.Fragment>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>  
                </div>

        <button className="buttonTabs" style={{marginRight: "80px"}} onClick={() => handleClick()}>SEND</button>
        </div>

            </div>
  }
  

export default withMoltoItClient(Results);
  