import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { withMoltoItClient } from './../apiHOCs';
import { useToast } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import Results from './Results';
import ModalResults from './ModalResults';

const MissionCode = ({ moltoItApiClient, props }) => {
  const [code, setCode] = useState('');
  const [isValidCode, setIsValidCode] = useState(false);
  const toast = useToast();
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    if (!isValidCode) {
      return toast({
        position: 'top',
        title: 'An error occurred.',
        description: 'You introduced an invalid code.',
        status: 'error',
        duration: 4000,
        isClosable: true
      });
    }
    fetch(code);
  };

  const validateUUID = (stringToTest) => {
    if (stringToTest[0] === '{') {
      stringToTest = stringToTest.substring(1, stringToTest.length - 1);
    }
    var regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
    return regexGuid.test(stringToTest);
  };

  const handleEvent = (event) => {
    const isValid = validateUUID(event.target.value);
    setIsValidCode(isValid);
    setCode(event.target.value);
  };

  const fetch = async (code) => {
    try {
      const res = await moltoItApiClient.getMissionByCode(code);

      if (res.status === 200 && res.data.length > 0) {
        if (res.data[0].status != 'finished') {
          toast({
            position: 'top',
            title: `Mission found - Generation ${
              res.data[0].progress === 'null'
                ? 'Starting'
                : res.data[0].progress
            } / ${res.data[0].configuration.maxGen}`,
            description: `We have found a mission with your code and its status is ${res.data[0].status}.`,
            status: 'success',
            duration: 4000,
            isClosable: true
          });
        } else {
          setStatus(true);
        }
      } else if (res.data.length <= 0) {
        toast({
          position: 'top',
          title: 'Mission not found',
          description: "We haven't found a mission with your code.",
          status: 'warning',
          duration: 9000,
          isClosable: true
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = () => {
    setStatus(false);
  };

  return (
    <React.Fragment>
      <div className="SectionTabs">
        <p className="Title">Do you have a mission code?</p>
        <p style={{ color: 'white' }}>
          If you have a mission code, please introduce it within the next input,
          if not please continue and click the create button.
        </p>
        <input
          style={{ borderBottom: '2px solid green' }}
          type="text"
          value={code}
          onChange={(event) => handleEvent(event)}
          placeholder="Introduce your code"
        />
        <button onClick={() => handleClick()}>Send</button>
        <Link to="moltoit/new">
          <button>Create</button>
        </Link>
      </div>
      {status ? (
        <ModalResults handleStatus={handleStatus} isOpen={true} code={code} />
      ) : null}
    </React.Fragment>
  );
};

export default withMoltoItClient(withRouter(MissionCode));
