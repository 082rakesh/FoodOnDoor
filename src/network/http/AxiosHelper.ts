import axios, {AxiosInstance} from 'axios';
import {AxiosError} from 'axios';
import {Logger} from '../../utils/Logger';
// import {BASE_URL} from '../../utils/Constants';

/*
  you can customize axio instance to pass as per your requirement within axios.create()
  It accepts : AxiosRequestConfig
  https://axios-http.com/docs/req_config
*/

// export const apiUrl = axios.create({baseURL: BASE_URL});
export const axioInstance: AxiosInstance = axios.create(); // removed base url because 2 different API set.

axioInstance.interceptors.request.use(
  config => {
    Logger.log('**************REQUEST[Interceptor]**********************');
    Logger.log(`RequestHeaders:${config.headers}`);
    Logger.log(`RequestBody:${config.params}`);
    Logger.log(`RequestBody:${config.url}`);
    Logger.log(`RequestData:${config.data}`);
    Logger.log('*************************************************');
    config.metadata = {startTime: new Date()};
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// add response interceptor
axioInstance.interceptors.response.use(
  response => {
    Logger.log('**************RESPONSE[Interceptor]**********************');
    Logger.log(
      `ResponseURL:${response.status}: ${response.statusText}: ${response.config.method}`,
    );
    Logger.log(`ResponseHeaders:${response.headers}`);
    //Logger.log(`ResponseData:${response.data}`); //TODO: temporarily commented to avoid huge logging
    Logger.log('*************************************************');

    const endTime = new Date();
    const duration = endTime - response.config.metadata.startTime;
    Logger.log(`Request to ${response.config.url} took ${duration} ms`);

    return response;
  },
  error => {
    const err = error as AxiosError;
    const status = error.response ? error.response.status : null;
    Logger.log('**************Error RESPONSE[Interceptor]***************');
    Logger.log(
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
