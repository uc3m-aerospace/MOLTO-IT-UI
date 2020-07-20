import axiosWithAuth from './axiosWithAuth';
import axios from 'axios';
export default history => {
  //const axios = axiosWithAuth(history);

  const getPareto = async (data) => {

    const url = 'https://molto-api-v1.studio/optimization/mission/json';
    try {
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getOrbits = async (data) => {

    const url = '/optimization/mission/json';
    try {
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return { getPareto, getOrbits };
};


