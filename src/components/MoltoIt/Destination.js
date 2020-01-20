import React from 'react'
import SelectBody from './CelestialBodies'

const Destination = (props) => {  
    return  <React.Fragment>
                  <p className="Title">SELECT YOUR ARRIVAL BODY</p>
                  <SelectBody/>
            </React.Fragment>
  }
  
  export default Destination;