import React from 'react'
import SelectBody from './CelestialBodies'

const From = (props) => {  
    return  <React.Fragment>
                <p className="Title">SELECT YOUR DEPARTURE BODY</p>
                <SelectBody component='From'/>
            </React.Fragment>
  }
  
  export default From;