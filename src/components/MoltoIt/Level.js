import React from 'react'


const Level = (props) => {  
    return  <React.Fragment>
               <p className="Title">SELECT YOUR CONFIGURATION</p>
               <button onClick={() => props.function(null, props.value !== 7 ? props.value + 1 : 0)}>EASY</button>
               <p>OR</p>
               <button onClick={() => props.function(null, props.value !== 7 ? props.value + 1 : 0)}>ADVANCE</button>
            </React.Fragment>
  }
  
  export default Level;