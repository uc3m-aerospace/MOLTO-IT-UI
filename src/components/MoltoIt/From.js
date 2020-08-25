import React from 'react';
import SelectBody from './CelestialBodies';
import IconPlanet from '../../assets/images/icons/PLANET.svg';

const From = (props) => {
  return (
    <>
      <div className="container__title">
        <img src={IconPlanet} alt="config" />
        <p className="Title">SELECT YOUR DEPARTURE BODY</p>
      </div>
      <SelectBody component="From" />
    </>
  );
};

export default From;
