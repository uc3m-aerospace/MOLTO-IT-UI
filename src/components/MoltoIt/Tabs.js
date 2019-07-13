import React, { Fragment } from 'react';
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
          break;
        case 1:
            return <LaunchWindow/>
          break;
        case 2:
            return <From/>
          break;
        case 3:
            return <Destination/>
          break;
        case 4:
            return <MissionType/>
          break;
        case 5:
            return <Motor/>
          break;
        case 6:
            return <FlightTtime/>
          break;
        case 7:
            return <Results/>
          break; 
        case 8:
            return <Preview/>
          break; 
        case 9:
            return <FinalResults />       
          break;       
        default:
          
      }

}

const Tabs = (props) => {  
    console.log(props)
  return  <React.Fragment>
             {TabTree({...props})}
          </React.Fragment>
}

export default Tabs;
