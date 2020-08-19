import React, { useEffect, useState } from 'react';
import '../../../styles/main.scss';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
//import constants from '../../../constants/cardsText';
import Typer from './Typer';
import { withHomeApiClient } from './../../apiHOCs';

const Hero = ({ homeApiClient }) => {
  return (
    <div className="hero__container">
      <h1 className="hero__title">
        MOLTO is an Open Source design mission tool.
      </h1>
      <p>
        MOLTO mission designer is a fully automated web client based on a matlab
        backend for the preliminary design of low-thrust, multi-gravity assist
        trajectories.
      </p>
    </div>
  );
};

export default withHomeApiClient(Hero);
