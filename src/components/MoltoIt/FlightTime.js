import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FORM_DATA } from '../../constants';
import Switch from 'react-switch';
import { withMoltoItClient } from './../apiHOCs';
import ModalCode from './ModalCode';
import { useToast } from '@chakra-ui/core';
import { getCookie } from './../../helpers';
import IconTime from '../../assets/images/icons/FLIGHT.svg';
var missionid = 0;
const FlightTime = ({ moltoItApiClient, newProps }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.moltoItConfig);
  const [status, setStatus] = useState(false);
  const [min, setMin] = useState(data.ToF[0]);
  const [max, setMax] = useState(data.ToF[1]);
  const [loader, setLoader] = useState(false);
  const [checked, setChecked] = useState(false);
  var uuidMission = useRef();

  const fetch = async (data) => {
    delete data['ToF_type'];
    delete data['motor'];
    delete data['motorType'];
    const cookie = await getCookie('jwt');

    try {
      const data_cms = {
        mission_name: data.problem_name,
        configuration: data
      };

      const cms = await moltoItApiClient.saveMission(data_cms);
      missionid = cms.data.id;
    } catch (error) {
      console.log(error);
    }

    try {
      data['mission_id'] = missionid;
      data['jwt'] = cookie;
      const res = await moltoItApiClient.getPareto(data);

      if (res.status === 200) {
        uuidMission.current = res.data;
        try {
          const data_cms = {
            code: uuidMission.current,
            status: 'running'
          };

          const cms = await moltoItApiClient.updateMission(data_cms, missionid);
          if (cms.status === 200) {
            setStatus(true);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        toast({
          position: 'top',
          title: 'Sorry.',
          description:
            'we have a problem with your configuration, please try again.',
          status: 'error',
          duration: 9000,
          isClosable: true
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        position: 'top',
        title: 'Sorry.',
        description: error,
        status: 'error',
        duration: 9000,
        isClosable: true
      });
    }
  };

  const sendFlightTime = (min, max) => {
    let threshold = [];
    threshold.push(min);
    threshold.push(max);
    dispatch({ type: FORM_DATA, payload: { ToF: threshold } });
  };

  const handleChange = () => {
    if (!checked) {
      setChecked(true);

      dispatch({ type: FORM_DATA, payload: { ToF_type: 'years' } });
    } else {
      setChecked(false);

      dispatch({ type: FORM_DATA, payload: { ToF_type: 'days' } });
    }
  };

  useEffect(() => {
    sendFlightTime(min, max);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [min, max]);
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleClick = async () => {
    fetch(data);

    setLoader(true);
    await sleep(1000);
    setLoader(false);
    //newProps.function(null, newProps.value !== 7 ? newProps.value + 1 : 0)
  };

  return (
    <React.Fragment>
      {loader ? (
        <div className="loader">
          <img
            src={
              'https://d2vrnm4zvhq6yi.cloudfront.net/assets/loader_puntos-df9857dfaf7eeb01c9cb2c2d1d208a8365ea4cdab85e1adeadaceff0c8f27964.gif'
            }
            alt="loading..."
          />
        </div>
      ) : null}
      <div className="container__title">
        <img src={IconTime} alt="config" />
        <p className="Title">FLIGHT TIME</p>
      </div>

      <label>
        <Switch
          onChange={() => handleChange()}
          checked={checked}
          offColor="#3a59fa"
          onColor="#3a59fa"
          uncheckedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 8,
                color: 'white',
                paddingRight: 2
              }}
            >
              Days
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 8,
                color: 'white',
                paddingRight: 2
              }}
            >
              Years
            </div>
          }
        />
      </label>
      <div className="time__container">
        <div>
          <p>Minimum</p>
          <input
            type="number"
            value={min}
            onChange={(event) => setMin(parseInt(event.target.value))}
            placeholder="Enter the min number of flybys"
          />
        </div>
        <div>&nbsp;&nbsp;&nbsp;</div>
        <div>
          <p>Maximum</p>
          <input
            type="number"
            value={max}
            onChange={(event) => setMax(parseInt(event.target.value))}
            placeholder="Enter the max number of flybys"
          />
        </div>
      </div>

      <button className="newButton" onClick={() => handleClick()}>
        SEND
      </button>
      {status ? (
        <ModalCode {...newProps} open={true} code={uuidMission.current} />
      ) : null}
    </React.Fragment>
  );
};

export default withMoltoItClient(FlightTime);
