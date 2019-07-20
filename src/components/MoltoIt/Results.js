import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import {
    ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer
  } from 'recharts';
  

const data = {
        "problem_name":"Ceres",
        "problem_type":"rendezvous",
        "planet_dep":"Earth",
        "planet_arr":"2000001",
        "vinf0_max":1.6,
        "planet_fb":["4"],
        "rfb_min":200,
        "Isp":3000,
        "thrust":100,
        "nthrusters":1,
        "mass":1000,
        "power":5000,
        "n_fb":[0,1],
        "rev":[0,0],
        "ToF":[100,1000],
        "Initial_Date":["2003-Jan-01","2003-Dec-31"],
        "init_file":[],
        "output_file":"Ceres.txt",
        "plot":0,
        "useParallel":"no",
        "options":[],
        "maxGen":15,
        "popsize":10,
        "output_dir":"~/tmp/Ceres"
    }
const data_pretty = {
    'Problem Type:': 'Flyby',
    'Departure Body:': 'Earth',
    'Arrival Body:': 'Jupiter',
    'Available planets:': '[4,3,2]',
    'Min. Flyby Altitude:': 200,
    'Min/Max # of possible flybys:': '[0,3]',
    'Min/Max # of possible Revs:': [0,0],
    'Min/Max transfer time/leg:': '[100, 1000]',
    'Motor:': 'HERMeS',
    'Type of Motor:': 'Electric',
    'Specific Impulse:': 2600,
    'Number of Thrusters:': 1,
    'Mass:': 1000,
    'Power:': 5000,
    'Initial Date:': '["03-01-01","03-12-31"]'
}


const Results = (props) => {  
    const [generation, setGeneration] = useState([])    
    const [generationtwo, setGenerationTwo] = useState([])    
    const [lastGeneration, setLastGeneration] = useState('')
       
     
    const arrayToJson = (json) => {

        let result = [];
        let result_1 = [];

        delete json[Object.keys(json).length-1]
        
        Object.entries(json).map(([key, val]) => {
            let jsonItem1 = {}
            console.log(json)
            val.map((value, index) => {
                jsonItem1[index === 0 ? 'x' : index === 1 ? 'y' : 'z' ] = value
            })
            result.push(jsonItem1)

            result_1 =  result.filter(function (item) {
                console.log(item)
               return item['z'].includes("-1");
           });
           console.log(result_1);
        })
        setGenerationTwo(result_1)
        setGeneration(result)
    }

    useEffect(() => {
        const socket = io('http://163.117.179.251:5000',  {'sync disconnect on unload': true }, {transports: ['polling']})

        socket.on('connect', () => {
            console.log("Connected!")
            console.log(socket.connected); // true

            socket.on('tmp', (data) => {
                console.log(data)
                if (data.isAnyFile === false) {
                    console.log("There is no information.")
                }
                else {
                    arrayToJson(data)
                    setLastGeneration(data[Object.keys(data).sort().pop()])
                }

            })
        });
        return () => socket.connect()
      }, [generation]); 


   return  <React.Fragment>
            <p className="Title">RESULTS</p>
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
                        <p className='ParetoTitles'>Please select one Pareto point once the process finished</p>
                        <table className="ParetoTable">
                            <thead>
                                <tr>
                                    <th><b>mp/m0</b></th>
                                    <th><b>Years</b></th>
                                </tr>
                            </thead> 
                            <tbody>
                                {generation.map((value, index) => {  
                                    return <React.Fragment>
                                            <tr onClick={() => {console.log(index+1)}} key={index}>
                                                <td>{value['x']}</td>
                                                <td>{value['y']}</td>
                                            </tr>
                                        </React.Fragment>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>  
                </div>
        </div>
            </React.Fragment>
  }
  
  export default Results;