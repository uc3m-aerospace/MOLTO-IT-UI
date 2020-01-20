  import axios from 'axios';
  import { setCookie } from './../helpers';
  
  export default () => {

    const Login = async () => {
      const url = 'https://molto-api-v1.studio/login';
  
      const params = new URLSearchParams();
      params.append('username', 'brandon');
      params.append('password', 'molto');
  
      try {
        const { data: respBody } = await axios.post(url, params);
        if (respBody) {
          setCookie('accessToken', respBody.access_token, 1000000);
          // idToken will expire in 90 days (7776000 seconds) TODO: make it an env variable?
          return respBody;
        }
      } catch (error) {
        throw error;
      }
    };
  
    return { Login };
  };
  