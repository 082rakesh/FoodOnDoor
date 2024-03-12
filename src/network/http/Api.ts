import axios from 'axios';
import {BASE_URL} from '../../utils/Constants';

export const apiUrl = axios.create({baseURL: BASE_URL});

// defining a custom error handler for all APIs
/*
const errorHandler = error => {
  const statusCode = error.response?.status;

  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};
*/

apiUrl.interceptors.request.use(
  function (config) {
    console.log('config -> ', config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// add response interceptor
apiUrl.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);
