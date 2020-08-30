import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, connect } from 'react-redux';
import { sendFormData } from '../../actions';
import { FORM_DATA } from '../../constants';
import IconSat from '../../assets/images/icons/SATELLITE.svg';
import TitleTooltip from './TitleTooltip';

const Launch = (props) => {
  const dispatch = useDispatch();
  const moltoItConfig = useSelector((state) => state.moltoItConfig);
  const [fixedState, setFixedState] = useState(false);
  const [startDate, setStartDate] = useState(moltoItConfig.Initial_Date[0]);
  const [endDate, setEndDate] = useState(moltoItConfig.Initial_Date[1]);

  const fixedValueDates = (date) => {
    setStartDate(date);
    setEndDate(date);
  };

  const sendDates = (start, end) => {
    let dates = [];
    dates.push(start);
    dates.push(end);
    dispatch({ type: FORM_DATA, payload: { Initial_Date: dates } });
  };

  useEffect(() => {
    sendDates(startDate, endDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  return (
    <React.Fragment>
      <div className="container__title">
        <img src={IconSat} alt="sat" />
        <p className="Title">¿WHEN ARE YOU GOING TO LAUNCH YOUR SATELLITE?</p>
      </div>

      <div className="launch__container">
        <button
          onClick={() => setFixedState(!fixedState)}
          className={fixedState ? 'fixedDateButtonActive' : 'fixedDateButton'}
        >
          {fixedState ? 'RANGE DATE' : 'FIXED DATE'}
        </button>
        {!fixedState ? (
          <div className="launch__inputs">
            <div className="input__container">
              <TitleTooltip
                title="Start date"
                description="This is the start date of the launch window of your mission."
                tooltipTitle="Launch dates"
                recommendation="Needs to be < than End date"
              />
              <input
                type="date"
                id="start_date"
                value={moltoItConfig.Initial_Date[0]}
                onChange={(event) => setStartDate(event.target.value)}
              />
            </div>
            <div className="input__container">
              <TitleTooltip
                title="End date"
                description="This is the end date of the launch window of your mission."
                tooltipTitle="Launch dates"
                recommendation="Needs to be > than Start date"
              />
              <input
                type="date"
                id="end_date"
                value={moltoItConfig.Initial_Date[1]}
                onChange={(event) => setEndDate(event.target.value)}
              />
            </div>
          </div>
        ) : (
          <React.Fragment>
            <TitleTooltip
              title="Fixed date"
              description="This is a pre-fixed date, it means is the exact day your mission will start."
              tooltipTitle="Launch date"
            />
            <input
              type="date"
              value={moltoItConfig.Initial_Date[0]}
              onChange={(event) => fixedValueDates(event.target.value)}
            />
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

Launch.propTypes = {
  startDate: PropTypes.number,
  endDate: PropTypes.number
};

export default connect(
  (state) => ({
    admin: state.admin,
    moltoItConfig: state
  }),
  { sendFormData }
)(Launch);
