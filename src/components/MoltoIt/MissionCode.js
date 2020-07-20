import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom';

let badName;
const MissionCode = (props) => {  

    const [name, setName] = useState('')


    const checkName = () => {
        if (name.length < 2) {
            badName = true
        } else {
            badName = false
        }
    }

    const handleEvent = (event) => {
        let cleanValue = event.target.value.toLowerCase()
        let cleanValue_ = cleanValue.replace(/ /g, "")
        setName(event.target.value)
        checkName()
    }


    return  <React.Fragment>
                <div className="SectionTabs">
                    <p className="Title">Do you have a mission code?</p>
                    <p style={{color: "white"}}>If you have a mission code, please introduce it within the next input, if not please continue and click the create button.</p>
                    <input style={{borderBottom: badName ? "2px solid red" : "2px solid green"}} type="text" value={name} onChange={(event) => handleEvent(event) } placeholder="Introduce your code"/>
                    <button onClick={ () => props.history.push("/moltoit/new") }>Send</button>
                    <button onClick={ () => props.history.push("/moltoit/new") }>Create</button>
               </div>
            </React.Fragment>
  }
  
  export default withRouter(MissionCode);