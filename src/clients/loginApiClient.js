  import axios from 'axios';
  import { setCookie } from './../helpers';
  
  export default () => {

    const Login = async () => {
      const url = 'https://molto-admin.herokuapp.com/auth/local'; //https://molto-api-v1.studio/login
  
      const params = new URLSearchParams();
      params.append('identifier', 'MOLTO-Client');
      params.append('password', 'moltoAdmin2020');
  
      try {
        const { data: respBody } = await axios.post(url, params);
        if (respBody) {
          setCookie('jwt', respBody.jwt, 1000000);
          // idToken will expire in 90 days (7776000 seconds) TODO: make it an env variable?
          return respBody;
        }
      } catch (error) {
        throw error;
      }
    };
  
    return { Login };
  };
  