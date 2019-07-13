import React, {useState} from 'react'


const Mission = (props) => {  
    const [missionType, setMissionType] = useState(false)
    return  <React.Fragment>
                { !missionType ? 
                    <React.Fragment>
                        <p className="Title">SELECT YOUR MISSION TYPE</p>
                        <button onClick={() => {setMissionType(true)}}>FLYBY</button>
                        <button onClick={() => {setMissionType(true)}}>RENDEZVOUS</button>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <p className="Title">PLEASE INPUT NUMBER OF FLYBYS</p>
                        <div className="Launch">
                            <div>
                                <p>Minimum</p>
                                <input type="number" placeholder="Enter the min number of flybys"/>
                            </div>
                            <div>&nbsp;&nbsp;&nbsp;</div>
                            <div>
                                <p>Maximum</p>
                                <input type="number" placeholder="Enter the max number of flybys"/>
                            </div>
                        </div>
                        <button onClick={() => {setMissionType(false)}}>GOTO FLYBYS</button>
                       
                    </React.Fragment>
                }
            </React.Fragment>
  }
  
  export default Mission;