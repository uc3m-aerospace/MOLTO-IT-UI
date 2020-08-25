import React from 'react';
import '../../../styles/main.scss';

const Hero = () => {
  return (
    <div className="hero__container">
      <h1 className="hero__title">
        MOLTO is an Open Source <span> design mission tool. --dev--</span>
      </h1>
      <p>
        MOLTO mission designer is a fully automated web client based on a matlab
        backend for the preliminary design of low-thrust, multi-gravity assist
        trajectories.
      </p>
    </div>
  );
};

export default Hero;
