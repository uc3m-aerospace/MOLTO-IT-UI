import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FORM_DATA } from '../../constants';
import IconConfig from '../../assets/images/icons/CONFIGURATION.svg';
import TitleTooltip from './TitleTooltip';
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
      <div className="container__title">
        <img src={IconConfig} alt="config" />
        <p className="Title">SELECT YOUR CONFIGURATION</p>
      </div>
      <div style={{ marginBottom: '25px' }}>
        <TitleTooltip
          title="Name of the mission"
          description="Select the name of the mission."
          tooltipTitle="Name"
        />

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
        <TitleTooltip
          title="Confirm Population"
          description="Number of population for the Genetic Algorithm configuration."
          tooltipTitle="Genetic Algorith"
          recommendation="Between 50-500"
        />
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
        <TitleTooltip
          title="Confirm Generations"
          description="Number of generations for the Genetic Algorithm configuration."
          tooltipTitle="Genetic Algorithm"
          recommendation="Between 50-300"
        />
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
      <button className="level__button">Easy</button>
    </React.Fragment>
  );
};

export default Level;
