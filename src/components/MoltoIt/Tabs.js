import React from 'react';
import '../../styles/main.scss'
import Level from './Level'
import LaunchWindow from './Launch'
import From from './From'
import Destination from './Destination'
import MissionType from './Mission'
import Motor from './Motor'
import FlightTtime from './FlightTime'
import Results from './Results'
import Preview from './Preview'
import FinalResults from './FinalResults'

const TabTree = (props) => {
    switch(props.value) {
        case 0:
            return <Level value={props.value} function={props.function}/>
        case 1:
            return <LaunchWindow/>
        case 2:
            return <From/>
        case 3:
            return <Destination/>
        case 4:
            return <MissionType/>
        case 5:
            return <Motor/>
        case 6:
            return <FlightTtime/>
        case 7:
            return <Results/>
        case 8:
            return <Preview/>
        case 9:
            return <FinalResults />       
        default:
          
      }

}

const Tabs = (props) => {  

  return  <React.Fragment>
             {TabTree({...props})}
          </React.Fragment>
}

export default Tabs;
