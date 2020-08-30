import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@chakra-ui/core';
import { motion, AnimatePresence } from 'framer-motion';
import { Divider } from '@chakra-ui/core';
import { Flex, Box } from '@chakra-ui/core';

const TitleTooltip = ({
  title,
  tooltipTitle,
  description,
  recommendation,
  customWidth,
  customPosition,
  customTop
}) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const [onHover, setOnHover] = useState(false);

  const handleHover = (type) => {
    if (type === 'start') {
      setOnHover(true);
    } else {
      setOnHover(false);
    }
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOnHover(false);
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const tooltip = {
    closed: { opacity: 0, transition: { duration: 1 } },
    open: { opacity: 1, transition: { duration: 5 } }
  };

  return (
    <AnimatePresence>
      <div
        ref={wrapperRef}
        className="title__tooltip"
        style={{ width: customWidth ? customWidth : null }}
      >
        <p>{title}</p>
        <motion.div
          className="moltoit__question_icon"
          onHoverStart={() => handleHover('start')}
          onHoverEnd={() => handleHover()}
          onTap={() => setOnHover(!onHover)}
        >
          <Icon name="question" size="26px" color="blue.500" ml="10px" />
        </motion.div>

        {onHover ? (
          <motion.div
            style={{
              width: '200px',
              backgroundColor: 'white',
              position: 'absolute',
              right: 0,
              borderRadius: '5px',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              margin: ' 30px',
              border: '1px solid gray'
            }}
            animate={onHover ? 'open' : 'close'}
            variants={tooltip}
          >
            <h3
              style={{
                color: 'black',
                fontSize: '16px',
                height: '15px',
                margin: '4px'
              }}
            >
              {tooltipTitle}
            </h3>
            <p style={{ color: 'black', margin: 0 }}>{description}</p>
            <Divider borderColor="gray.300" w="100%" />
            {recommendation ? (
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Flex alignItems="center" justifyContent="center">
                  <Icon name="view" size="22px" color="gray.500" ml="10px" />
                  <span style={{ fontSize: '16px', marginLeft: '5px' }}>
                    Hint
                  </span>
                </Flex>
                <Flex>
                  <p style={{ color: 'black' }}>{recommendation}</p>
                </Flex>
              </Flex>
            ) : null}
          </motion.div>
        ) : null}
      </div>
    </AnimatePresence>
  );
};

export default TitleTooltip;
