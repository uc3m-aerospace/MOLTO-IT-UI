import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FORM_DATA } from '../../constants';
import Mars from '../../assets/images/Planets/1024/mars.png';
import Earth from '../../assets/images/Planets/1024/earth.png';
import Mercury from '../../assets/images/Planets/1024/mercury.png';
import Venus from '../../assets/images/Planets/1024/venus.png';
import Uranus from '../../assets/images/Planets/1024/uranus.png';
import Neptune from '../../assets/images/Planets/1024/neptune.png';
import Jupyter from '../../assets/images/Planets/1024/jupyter.png';
import Saturn from '../../assets/images/Planets/1024/saturn.png';
import { motion } from 'framer-motion';
import { Icon } from '@chakra-ui/core';
import { useWindowSize } from '../Hooks/useWindowSize';

const planets = [
  {
    index: 0,
    name: 'Mercury',
    image: Mercury,
    position: 575,
    position_mobile: 730
  },
  {
    index: 1,
    name: 'Earth',
    image: Earth,
    position: 410,
    position_mobile: 540
  },
  { index: 2, name: 'Mars', image: Mars, position: 245, position_mobile: 360 },
  { index: 3, name: 'Venus', image: Venus, position: 80, position_mobile: 175 },
  {
    index: 4,
    name: 'Jupiter',
    image: Jupyter,
    position: -85,
    position_mobile: -10
  },
  {
    index: 5,
    name: 'Saturn',
    image: Saturn,
    position: -250,
    position_mobile: -280
  },
  {
    index: 6,
    name: 'Uranus',
    image: Uranus,
    position: -415,
    position_mobile: -535
  },
  {
    index: 7,
    name: 'Neptune',
    image: Neptune,
    position: -580,
    position_mobile: -722
  }
];

const CelestialBodies = (props) => {
  const size = useWindowSize();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.moltoItConfig);
  const toOrFrom = props.component === 'From' ? 'planet_dep' : 'planet_arr';
  const [isSelected, setIsSelected] = useState();
  const [planetSelected, setPlanetSelected] = useState(data[toOrFrom]);
  const [positionPlanet, setPositionPlanet] = useState('');
  const [positionX, setPositionX] = useState(
    size.width <= 768
      ? planets.find((record) => record.name === data[toOrFrom]).position_mobile
      : planets.find((record) => record.name === data[toOrFrom]).position
  );
  const _handleChange = (planet) => {
    dispatch({ type: FORM_DATA, payload: { [toOrFrom]: planet.name } });

    if (size.width >= 768) {
      const distance = parseInt(planetSelected.index) - parseInt(planet.index);

      if (parseInt(distance) >= 0) {
        setPositionX(positionX + 165 * Math.abs(distance));
      } else {
        setPositionX(positionX - 165 * Math.abs(distance));
      }
    }
  };

  const planetVariant = {
    closed: {
      transition: { duration: 0.5, ease: [0.37, 0.04, 0.2, 1] },
      scale: 1
    },
    open: {
      transition: { duration: 0.5, ease: [0.37, 0.04, 0.2, 1] },
      scale: 1.4
    }
  };

  const _handleState = () => {
    if (toOrFrom === 'planet_dep') {
      planets.map((planet) => {
        return planet.name === data.planet_dep
          ? setPlanetSelected(planet)
          : null;
      });
    } else {
      planets.map((planet) => {
        return planet.name === data.planet_arr
          ? setPlanetSelected(planet)
          : null;
      });
    }
  };

  useEffect(() => {
    _handleState();
  });

  const handleArrow = (side) => {
    if (side === 'left') {
      const previousPlanet = planets[planetSelected.index - 1];
      const lastPlanet = planets[7];

      if (planetSelected.index === 0) {
        setPlanetSelected(lastPlanet.name);
        _handleChange(lastPlanet);

        if (size.width <= 768) {
          setPositionX(
            planets.find((record) => record.name === lastPlanet.name)
              .position_mobile
          );
        } else {
          setPositionX(
            planets.find((record) => record.name === lastPlanet.name).position
          );
        }

        return;
      }

      if (size.width <= 768) {
        console.log(
          planets.find((record) => record.name === previousPlanet.name)
            .position_mobile
        );
        setPositionX(
          planets.find((record) => record.name === previousPlanet.name)
            .position_mobile
        );
      } else {
        setPositionX(
          planets.find((record) => record.name === previousPlanet.name).position
        );
      }

      setPositionPlanet('left');
      setPlanetSelected(previousPlanet.name);
      _handleChange(previousPlanet);
    } else {
      const nextPlanet = planets[planetSelected.index + 1];
      const firstPlanet = planets[0];

      if (planetSelected.index === 7) {
        setPlanetSelected(firstPlanet.name);
        _handleChange(firstPlanet);
        if (size.width <= 768) {
          setPositionX(
            planets.find((record) => record.name === firstPlanet.name)
              .position_mobile
          );
        } else {
          setPositionX(
            planets.find((record) => record.name === firstPlanet.name).position
          );
        }

        return;
      }

      if (size.width <= 768) {
        console.log(
          planets.find((record) => record.name === nextPlanet.name)
            .position_mobile
        );
        setPositionX(
          planets.find((record) => record.name === nextPlanet.name)
            .position_mobile
        );
      } else {
        setPositionX(
          planets.find((record) => record.name === nextPlanet.name).position
        );
      }

      setPositionPlanet('right');
      setPlanetSelected(nextPlanet.name);
      _handleChange(nextPlanet);
    }
  };

  return (
    <div className="celestial__bodies__section">
      <motion.div
        onClick={() => handleArrow('left')}
        className="celestial__body__arrow"
        whileHover={{ scale: 1.4 }}
      >
        <Icon name="chevron-left" size="40px" color="white"></Icon>
      </motion.div>
      <motion.div
        className="celestial__bodies__container"
        animate={{ translateX: positionX }}
        transition={{ duration: 1, ease: [0.37, 0.04, 0.2, 1] }}
      >
        {planets.map((planet, index) => (
          <motion.div
            variants={planetVariant}
            onClick={() =>
              isSelected ? setIsSelected(false) : setIsSelected(true)
            }
            initial="closed"
            animate={planet.name === planetSelected.name ? 'open' : 'closed'}
            whileHover={{ scale: 1.4, opacity: 1 }}
            className="body__container"
            id={planet.name}
          >
            <p>{planet.name}</p>
            <div
              onClick={() => _handleChange(planet)}
              key={planet.name}
              tabIndex={index}
              style={{ outline: 'none', border: 'none', boxShadow: 'none' }}
              role="menuitem"
            >
              <img
                onClick={() => _handleChange(planet)}
                src={planet.image}
                alt={planet.name}
                style={{
                  display: 'block',
                  width: planet.name === 'Saturn' ? '270px' : '120px'
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="celestial__body__arrow"
        onClick={() => handleArrow('right')}
        whileHover={{ scale: 1.4 }}
      >
        <Icon name="chevron-right" size="40px" color="white"></Icon>
      </motion.div>
    </div>
  );
};

export default CelestialBodies;
