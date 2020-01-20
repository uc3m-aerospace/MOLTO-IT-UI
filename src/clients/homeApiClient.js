import axiosWithAuth from './axiosWithAuth';

export default history => {
  const axios = axiosWithAuth(history);

  const getSliders = async () => {
    const url = '/sliders';
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  };


  const getCollaborators = async () => {

    const url = '/collaborators';
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return { getSliders, getCollaborators };
};


