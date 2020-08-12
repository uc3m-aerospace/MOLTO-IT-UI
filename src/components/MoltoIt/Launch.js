import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch, connect } from "react-redux";
import {sendFormData} from '../../actions'
import {FORM_DATA} from '../../constants'


const Launch = (props) => {  
    const dispatch = useDispatch();
    const moltoItConfig = useSelector(state => state.moltoItConfig);

    const [fixedState, setFixedState] = useState(false)
    const [startDate, setStartDate] = useState(moltoItConfig.Initial_Date[0])
    const [endDate, setEndDate] = useState(moltoItConfig.Initial_Date[1])
    
    const fixedValueDates = (date) => {
        setStartDate(date)
        setEndDate(date)
    }
    const sendDates = (start, end) => {
        let dates = []
        dates.push(start)
        dates.push(end)
        dispatch({type: FORM_DATA, payload: {'Initial_Date':dates} })
    }
 
    useEffect(() => {
        sendDates(startDate, endDate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startDate, endDate])


    return  <React.Fragment>
                <p className="Title">¿WHEN ARE YOU GOING TO LAUNCH YOUR SATELLITE?</p>
                <div className="Launch" style={{flexDirection: fixedState ? "column" : "row"}}>
                    { !fixedState ?
                        <React.Fragment>
                            <input type="date" value={moltoItConfig.Initial_Date[0]} onChange={(event) => setStartDate(event.target.value)}/>
                            <button onClick={() => setFixedState(true) } className="fixedDateButton">FIXED DATE</button>
                            <input type="date" value={moltoItConfig.Initial_Date[1]} onChange={(event) => setEndDate(event.target.value)}/>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <input type="date" value={moltoItConfig.Initial_Date[0]} onChange={(event) => fixedValueDates(event.target.value)}/>
                            <button onClick={() => setFixedState(false) } className={fixedState ? "fixedDateButtonActive" : "fixedDateButton" }>RANGE DATE</button>
                        </React.Fragment>
                    }
                </div>
            </React.Fragment>
  }


  Launch.propTypes = {
    startDate: PropTypes.string,
    endDate: PropTypes.number
  };
  
export default connect(state => ({
    admin: state.admin,
    moltoItConfig: state,
}), {sendFormData})(Launch);