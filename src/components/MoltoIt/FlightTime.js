import React from 'react'


const FlightTime = (props) => {  
    return  <React.Fragment>
                <p className="Title">FLIGHT TIME</p>
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
            </React.Fragment>
  }
  
  export default FlightTime;