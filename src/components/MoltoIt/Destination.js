import React from 'react';
import SelectBody from './CelestialBodies';
import IconPlanet from '../../assets/images/icons/PLANET.svg';
const Destination = (props) => {
  return (
    <>
      <div className="container__title">
        <img src={IconPlanet} alt="config" />
        <p className="Title">SELECT YOUR ARRIVAL BODY</p>
      </div>

      <SelectBody />
    </>
  );
};

export default Destination;
