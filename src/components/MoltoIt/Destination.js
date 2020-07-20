import React from 'react'
import SelectBody from './CelestialBodies'

const Destination = (props) => {  
    return  <div className="constrain">
                  <p className="Title">SELECT YOUR ARRIVAL BODY</p>
                  <SelectBody/>
            </div>
  }
  
  export default Destination;