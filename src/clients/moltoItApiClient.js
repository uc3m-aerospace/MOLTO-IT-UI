import axiosWithAuth from './axiosWithAuth';
import axios from 'axios';
export default (history) => {
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
    const url = 'https://molto-api-v1.studio/optimization/mission/json';
    try {
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const saveMission = async (data) => {
    const url = 'https://molto-admin.herokuapp.com/missions';
    try {
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const updateMission = async (data, missionid) => {
    const url = `https://molto-admin.herokuapp.com/missions/${missionid}`;
    try {
      const response = await axios.put(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getMissionByCode = async (code) => {
    const url = `https://molto-admin.herokuapp.com/missions?code=${code}`;
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getMissionById = async (id) => {
    const url = `https://molto-admin.herokuapp.com/missions/${id}`;
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
    getPareto,
    getOrbits,
    saveMission,
    getMissionByCode,
    getMissionById,
    updateMission
  };
};
