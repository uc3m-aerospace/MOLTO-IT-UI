import axios from 'axios';
import https from 'https';

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

const client = (history) => {
  const defaultOptions = {
    baseURL: 'https://molto-api-v1.studio/',
    method: 'get',
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    }),
    headers: {
      'Content-Type': 'application/json'
      //'Authorization': 'Basic bW9sdG86YWRtaW5Nb2x0bzIwMjA='
    }
  };

  // Create instance _
  const instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(async (config) => {
    const auth = await getParams();
    const usernamePasswordBuffer = Buffer.from(
      auth.username + ':' + auth.password
    );
    //const base64data = usernamePasswordBuffer.toString('base64');
    //console.log(base64data);
    //if (auth) config.headers.Authorization = `Basic ${base64data}`;

    return config;
  });

  return instance;
};

export default client;
