import React, { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DropdownGenerations = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState('Select Generation');

  const handleItem = (key) => {
    setIsOpen(false);
    props.handlerSelectedGen(key);
    setPlaceholder(`Generation ${key.split('_')[1]}`);
  };
  return (
    <>
      <div className="menu__container">
        <div className="menu__button" onClick={() => setIsOpen(!isOpen)}>
          <span>{placeholder}</span>
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            size="1x"
          />
        </div>

        {isOpen ? (
          <div className="menu__items">
            {props.isLoading
              ? null
              : Object.keys(props.generations).map(function (key, index) {
                  return (
                    <div className="menu__item" onClick={() => handleItem(key)}>
                      Generation {key.split('_')[1]}
                    </div>
                  );
                })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DropdownGenerations;
