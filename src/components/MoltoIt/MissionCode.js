import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withMoltoItClient } from './../apiHOCs';
import { useToast } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import ModalResults from './ModalResults';
import CodeIcon from '../../assets/images/icons/code.svg';
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

  const customToast = (title, description, status) => {
    toast({
      position: 'top',
      title: title,
      description: description,
      status: status,
      duration: 4000,
      isClosable: true
    });
  };

  const fetch = async (code) => {
    try {
      const res = await moltoItApiClient.getMissionByCode(code);
      const status = await moltoItApiClient.getMissionStatus(code);

      switch (status.data.state) {
        case 'FAILURE':
          customToast(
            'Mission failed',
            'Your mission has failed, please try again with a different configuration.',
            'error'
          );
          break;
        case 'SUCCESS':
          setStatus(true);
          break;
        case 'PENDING':
          customToast(
            'We have received your mission but it is waiting to be executed',
            `Your mission will start as soon as possible.`,
            'success'
          );
          break;
        case 'STARTED':
          customToast(
            `Mission found - Generation ${res.data[0].progress} / ${res.data[0].configuration.maxGen}`,
            `We have found a mission with your code and its status is ${res.data[0].status}.`,
            'success'
          );
          break;
        default:
          return customToast(
            `Mission found - Generation ${res.data[0].progress} / ${res.data[0].configuration.maxGen}`,
            `We have found a mission with your code and its status is ${res.data[0].status}.`,
            'success'
          );
      }
    } catch (error) {
      customToast(
        'Mission not found.',
        "We haven't found a mission with your code.",
        'warning'
      );
    }
  };

  const handleStatus = () => {
    setStatus(false);
  };

  return (
    <section>
      <div className="moltoit__missioncode">
        <div className="container__title">
          <img src={CodeIcon} alt="config" />
          <p className="Title">¿Do you have a mission code?</p>
        </div>
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
          <button>Create Mission</button>
        </Link>
      </div>
      {status ? (
        <ModalResults handleStatus={handleStatus} isOpen={true} code={code} />
      ) : null}
    </section>
  );
};

export default withMoltoItClient(withRouter(MissionCode));
