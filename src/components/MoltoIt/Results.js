import React, { useState, useEffect, useRef } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import { getCookie } from './../../helpers';
import { useSelector, useDispatch } from 'react-redux';
import { FORM_DATA } from '../../constants';
import { withMoltoItClient } from './../apiHOCs';
import { useParams, useHistory } from 'react-router-dom';
import { Spinner } from '@chakra-ui/core';
import DropdownGenerations from './DropdownGenerations';

const Results = ({ moltoItApiClient }) => {
  const history = useHistory();
  const [pareto, setPareto] = useState({});
  const [paretoWithFlyby, setParetoWithFlyby] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [mission, setMission] = useState({});
  const [currentPareto, setCurrentPareto] = useState('gen_1');
  const moltoItConfig = useSelector((state) => state.moltoItConfig);
  const dispatch = useDispatch();
  let { id } = useParams();

  const Planets = {
    Mercury: '1',
    Venus: '2',
    Earth: '3',
    Mars: '4',
    Jupiter: '5',
    Saturn: '6',
    Uranus: '7',
    Neptune: '8',
    Pluton: '9'
  };

  const missionStatus = useRef(false);

  const handleParetoPoint = (index) => {
    dispatch({ type: FORM_DATA, payload: { plot: index } });
  };

  const handlerSelectedGen = (gen) => {
    setCurrentPareto(gen);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchMission(id);
  }, []);

  const arrayToJson = (json) => {
    let result = [];
    let result_1 = [];

    delete json[Object.keys(json).length - 1];

    Object.entries(json).map(([key, val]) => {
      let jsonItem1 = {};
      val.map((value, index) => {
        jsonItem1[index === 0 ? 'x' : index === 1 ? 'y' : 'z'] = value;
        return 'ok';
      });
      result.push(jsonItem1);

      result_1 = result.filter(function (item) {
        return item['z'] === -1;
      });
    });

    return [result, result_1];
  };

  const fetchMission = async (code) => {
    try {
      const res = await moltoItApiClient.getMissionByCode(code);

      let paretoResults = {};
      let paretoResultsFlyby = {};

      Object.entries(res.data[0].results).map(([key, val]) => {
        const arrayPareto = arrayToJson(val);
        paretoResults[key] = arrayPareto[0];
        paretoResultsFlyby[key] = arrayPareto[1];

        setPareto(paretoResults);
        setParetoWithFlyby(paretoResultsFlyby);
      });

      setMission(res.data[0]);

      dispatch({
        type: FORM_DATA,
        payload: res.data[0].configuration
      });

      missionStatus.current = true;
      setIsLoading(false);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const fetch = async (data) => {
    delete data['ToF_type'];
    delete data['motor'];
    delete data['motorType'];
    delete data['type'];
    const cookie = await getCookie('jwt');

    if (data['response']) {
      return delete data['response'];
    }

    try {
      let data_copy = { ...data };
      data_copy['mission_id'] = mission.id;
      data_copy['jwt'] = cookie;
      data_copy['planet_dep'] = Planets[data_copy['planet_dep']];
      data_copy['planet_arr'] = Planets[data_copy['planet_arr']];
      const res = await moltoItApiClient.getOrbits(data_copy);

      dispatch({
        type: FORM_DATA,
        payload: {
          response:
            `data:${res.headers['content-type'].toLowerCase()};base64,` +
            res.data
        }
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async () => {
    setIsLoading(true);
    const res = await fetch(moltoItConfig);
    console.log(res);
    if (res.status === 200) {
      setIsLoading(false);
      return history.push({
        pathname: '/moltoit/finalresults',
        state: { fromResults: true }
      });
    }
  };

  const data_pretty = {
    'Name:': missionStatus.current ? mission.mission_name : '',
    'Problem Type:': missionStatus.current
      ? mission.configuration.problem_type
      : '',
    'Departure Body:': missionStatus.current
      ? mission.configuration.planet_dep
      : '',
    'Arrival Body:': missionStatus.current
      ? mission.configuration.planet_arr
      : '',
    'Available planets:': missionStatus.current
      ? JSON.stringify(mission.configuration.planet_fb)
      : '', //'[4,3,2]',
    'Min. Flyby Altitude:': missionStatus.current
      ? mission.configuration.rfb_min
      : '', //200,
    'Min/Max # of possible flybys:': missionStatus.current
      ? JSON.stringify(mission.configuration.n_fb)
      : '', //'[0,3]',
    'Min/Max # of possible Revs:': missionStatus.current
      ? JSON.stringify(mission.configuration.rev)
      : '', //[0,0],
    'Min/Max transfer time/leg:': missionStatus.current
      ? JSON.stringify(mission.configuration.ToF)
      : '', // '[100, 1000]',
    'Motor:': missionStatus.current ? mission.configuration.motor : '', //Get data from other tab
    'Type of Motor:': missionStatus.current
      ? mission.configuration.motorType
      : '', //Get data from other tab
    'Specific Impulse:': missionStatus.current ? mission.configuration.Isp : '', //2600,
    'Number of Thrusters:': missionStatus.current
      ? mission.configuration.nthrusters
      : '', // 1,
    'Mass:': missionStatus.current ? mission.configuration.mass : '', //1000,
    'Power:': missionStatus.current ? mission.configuration.power : '', //5000,
    'Initial Date:': missionStatus.current
      ? JSON.stringify(mission.configuration.Initial_Date)
      : '' //'["03-01-01","03-12-31"]'
  };

  return (
    <div className="pareto__container">
      {isLoading ? (
        <div className="loader">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      ) : null}
      <div className="pareto__dropdown">
        <DropdownGenerations
          handlerSelectedGen={handlerSelectedGen}
          isLoading={isLoading}
          generations={pareto}
        />
      </div>
      <h1 style={{ fontFamily: 'AvertaRegular' }}>
        Generation {currentPareto.split('_')[1]}
      </h1>

      <p className="Title">PARETO FRONT</p>
      <div className="pareto__data">
        <div className="pareto__configuration">
          {Object.entries(data_pretty).map(([key, value]) => {
            return (
              <div key={key} className="configuration__paragraph">
                <p className="ParetoContent">{key}</p>
                <p className="ParetoContentR">{value}</p>
              </div>
            );
          })}
        </div>
        <div className="pareto__objectives">
          <p className="ParetoTitles">Please select one pareto point</p>
          <table className="ParetoTable">
            <thead>
              <tr>
                <th>
                  <b>mp/m0</b>
                </th>
                <th>
                  <b>Years</b>
                </th>
              </tr>
            </thead>
            <tbody>
              {missionStatus.current
                ? Object.entries(mission.results[currentPareto]).map(
                    ([key, value], index) => {
                      return (
                        <tr
                          onClick={() => {
                            handleParetoPoint(index + 1);
                          }}
                          key={index}
                        >
                          <td
                            style={{
                              backgroundColor:
                                moltoItConfig.plot - 1 === index
                                  ? '#3a59fa'
                                  : null,
                              opacity:
                                moltoItConfig.plot - 1 === index ? 0.9 : null
                            }}
                          >
                            {value[0]}
                          </td>
                          <td
                            style={{
                              backgroundColor:
                                moltoItConfig.plot - 1 === index
                                  ? '#3a59fa'
                                  : null,
                              opacity:
                                moltoItConfig.plot - 1 === index ? 0.9 : null
                            }}
                          >
                            {value[1]}
                          </td>
                        </tr>
                      );
                    }
                  )
                : null}
            </tbody>
          </table>
          <div className="pareto__button">
            <button onClick={() => handleClick()}>SEND</button>
          </div>
        </div>

        <div className="pareto__chart">
          <ResponsiveContainer width={'100%'} height={'100%'}>
            <ScatterChart
              width={700}
              height={380}
              margin={{
                top: 20,
                right: 40,
                bottom: 20,
                left: 10
              }}
            >
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="ToF (Years)" />
              <YAxis type="number" dataKey="y" name="mp/m0" />
              <Tooltip cursor={{ strokeDasharray: '4 4' }} />
              <Legend />
              <Scatter
                name="0 Flyby"
                data={pareto[currentPareto]}
                fill="#3a59fa"
                shape="circle"
              />
              <Scatter
                name="1 Flybys"
                data={paretoWithFlyby[currentPareto]}
                fill="#82ca9d"
                shape="circle"
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default withMoltoItClient(Results);
