import axios from 'axios';
import { getCookie } from './../helpers';
import https from 'https';

async function getToken() {
  try {
    return await getCookie('jwt');
  } catch (error) {
    return null;
  }
}

const client = history => {
  
  const defaultOptions = {
    baseURL: 'https://molto-admin.herokuapp.com/', //https://molto-api-v1.studio/
    method: 'get',
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Create instance
  const instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(async config => {
    const token = await getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
  
  return instance;

};

export default client;
