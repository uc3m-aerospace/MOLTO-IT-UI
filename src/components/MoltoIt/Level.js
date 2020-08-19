import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FORM_DATA } from '../../constants';
import Joyride from 'react-joyride';

let badName;
const Level = (props) => {
  const data = useSelector((state) => state.moltoItConfig);
  const [name, setName] = useState(data.problem_name);
  const [population, setPopulation] = useState(data.popsize);
  const [generations, setGenerations] = useState(data.maxGen);
  const dispatch = useDispatch();

  const checkName = () => {
    if (data.problem_name.length < 2) {
      badName = true;
    } else {
      badName = false;
    }
  };

  const [steps, setSteps] = useState([
    {
      title: 'Code',
      target: '.input__name',
      content: 'This is my awesome feature!'
    },
    {
      target: '.input__population',
      content: 'Here you cant start your next mission!'
    },
    {
      target: '.input__generations',
      content: 'Here you cant start your next mission!'
    },
    {
      target: '.level__button',
      content: 'Here you cant start your next mission!'
    }
  ]);

  const handleEvent = (event) => {
    let cleanValue = event.target.value.toLowerCase();
    let cleanValue_ = cleanValue.replace(/ /g, '');
    setName(event.target.value);
    dispatch({
      type: FORM_DATA,
      payload: { problem_name: event.target.value }
    });
    dispatch({
      type: FORM_DATA,
      payload: { output_file: cleanValue_ + '.txt' }
    });
    dispatch({
      type: FORM_DATA,
      payload: { output_dir: '~/tmp/' + cleanValue_ }
    });
    checkName();
  };

  const handlePopulation = (event) => {
    setPopulation(event.target.value);
    dispatch({
      type: FORM_DATA,
      payload: { popsize: parseInt(event.target.value) }
    });
  };

  const handleGenerations = (event) => {
    setGenerations(event.target.value);
    dispatch({
      type: FORM_DATA,
      payload: { maxGen: parseInt(event.target.value) }
    });
  };

  return (
    <React.Fragment>
      <Joyride
        run={true}
        steps={steps}
        continuous={true}
        debug={true}
        showSkipButton={true}
        showProgress={true}
        styles={{
          options: {
            arrowColor: 'white',
            backgroundColor: 'white',
            overlayColor: 'rgba(255,255,255,.5)',
            primaryColor: 'rgb(49, 130, 205)',
            textColor: 'black',
            width: 400,
            zIndex: 1000
          }
        }}
      />
      <p className="Title">SELECT YOUR CONFIGURATION</p>
      <div style={{ marginBottom: '40px' }}>
        <p>Name of the mission</p>
        <input
          className="input__name"
          style={{
            borderBottom: badName ? '2px solid red' : '2px solid green'
          }}
          type="text"
          value={name}
          onChange={(event) => handleEvent(event)}
          placeholder="Name"
        />
      </div>
      <div style={{ marginBottom: '40px' }}>
        <p>Confirm Population (Gen. Algorithm)</p>
        <input
          className="input__population"
          type="number"
          max="1000"
          maxLength="3"
          value={population}
          onChange={(event) => handlePopulation(event)}
          placeholder="Population"
        />
        <div>&nbsp;&nbsp;&nbsp;</div>
        <p>Confirm Generations (Gen. Algorithm)</p>
        <input
          className="input__generations"
          type="number"
          max="1000"
          maxLength="3"
          value={generations}
          onChange={(event) => handleGenerations(event)}
          placeholder="Generations"
        />
      </div>
      <button
        className="level__button"
        onClick={() =>
          props.function(null, props.value !== 7 ? props.value + 1 : 0)
        }
      >
        EASY
      </button>
      {/*<p>OR</p>
            <button disabled style={{opacity: 0.3}}onClick={() => props.function(null, props.value !== 7 ? props.value + 1 : 0)}>ADVANCED</button>*/}
    </React.Fragment>
  );
};

export default Level;
