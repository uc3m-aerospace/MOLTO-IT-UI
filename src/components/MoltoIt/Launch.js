import React, {useState, useEffect} from 'react'


const Launch = (props) => {  
    const [fixedState, setFixedState] = useState(false)

    return  <React.Fragment>
            <p className="Title">¿WHEN ARE YOU GOING TO LAUNCH YOUR SATELLITE?</p>
            <div className="Launch" style={{flexDirection: fixedState ? "column" : "row"}}>
                { !fixedState ?
                    <React.Fragment>
                        <input type="date"/>
                        <button onClick={() => setFixedState(true) } className="fixedDateButton">FIXED DATE</button>
                        <input type="date"/>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <input type="date"/>
                        <button onClick={() => setFixedState(false) } className={fixedState ? "fixedDateButtonActive" : "fixedDateButton" }>RANGE DATE</button>
                    </React.Fragment>
                }
            </div>
              </React.Fragment>
  }
  
  export default Launch;