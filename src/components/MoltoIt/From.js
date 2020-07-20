import React from 'react'
import SelectBody from './CelestialBodies'

const From = (props) => {  
    return  <div className="constrain">
                <p className="Title">SELECT YOUR DEPARTURE BODY</p>
                <SelectBody component='From'/>
            </div>
  }
  
  export default From;