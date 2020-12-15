import axiosWithAuthCms from './axiosWithAuthCms';
import axiosWithAuthApi from './axiosWithAuthApi';
import axios from 'axios';
export default (history) => {
  const axiosAuthCms = axiosWithAuthCms(history);
  const axiosAuthApi = axiosWithAuthApi(history);

  const getPareto = async (data) => {
    const url = 'https://api.molto.uc3m.es/optimization/mission/json';
    try {
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getOrbits = async (data) => {
    const url = 'https://api.molto.uc3m.es/optimization/mission/json';
    try {
      const response = await axios.post(url, data, { timeout: 100000 });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const saveMission = async (data) => {
    const url = 'https://molto-admin.herokuapp.com/missions';
    try {
      const response = await axiosAuthCms.post(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const updateMission = async (data, missionid) => {
    const url = `https://molto-admin.herokuapp.com/missions/${missionid}`;
    try {
      const response = await axiosAuthCms.put(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getMissionByCode = async (code) => {
    const url = `https://molto-admin.herokuapp.com/missions?code=${code}`;
    try {
      const response = await axiosAuthCms.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getMissionById = async (id) => {
    const url = `https://molto-admin.herokuapp.com/missions/${id}`;
    try {
      const response = await axiosAuthCms.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const sendEmail = async (code, to) => {
    const data = {
      to: to,
      subject:
        'Your mission has started and here you have the code to see your results.',
      html: '',
      code: code
    };
    const url = `https://molto-admin.herokuapp.com/email-code`;
    try {
      const response = await axiosAuthCms.post(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  async function getParams() {
    try {
      let user = process.env.REACT_APP_BASIC_AUTH_USER;
      let password = process.env.REACT_APP_API_CELERY_PASSWORD;
      let auth = {
        username: user,
        password: password
      };
      return auth;
    } catch (error) {
      return null;
    }
  }

  const getMissionStatus = async (uuid) => {
    const url = `https://api.molto.uc3m.es/flower/api/task/info/${uuid}`;
    try {
      const response = await axiosAuthApi.get(url);
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
    updateMission,
    sendEmail,
    getMissionStatus
  };
};
