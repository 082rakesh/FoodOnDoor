import axios from 'axios';
import {AxiosError} from 'axios';
import {Logger} from '../../utils/Logger';
// import {BASE_URL} from '../../utils/Constants';

// export const apiUrl = axios.create({baseURL: BASE_URL});
export const apiUrl = axios.create(); // removed base url because 2 different API set.

apiUrl.interceptors.request.use(config => {
  Logger.log('**************REQUEST[Interceptor]**********************');
  Logger.log(`RequestHeaders:${config.headers}`);
  Logger.log(`RequestBody:${config.params}`);
  Logger.log(`RequestBody:${config.url}`);
  Logger.log(`RequestData:${config.data}`);

  Logger.log('*************************************************');
  return config;
});

// add response interceptor
apiUrl.interceptors.response.use(
  response => {
    console.log('**************RESPONSE[Interceptor]**********************');
    console.log(
      `ResponseURL:${response.status}: ${response.statusText}: ${response.config.method}`,
    );
    console.log(`ResponseHeaders:${response.headers}`);
    //console.log(`ResponseData:${response.data}`); //TODO: temporarily commented to avoid huge logging
    console.log('*************************************************');

    return response;
  },
  error => {
    const err = error as AxiosError;
    const status = error.response ? error.response.status : null;
    console.log('**************Error RESPONSE[Interceptor]***************');
    console.log(
      `Error response: ${err.code}: ${err.message}: ${err.status} : status is: ${status}`,
    );

    if (status === 401) {
      // Handle unauthorized access
    } else if (status === 404) {
      // Handle not found errors
    } else {
      // Handle other errors
    }
    return Promise.reject(error);
  },
);
