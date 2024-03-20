import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';

// Define a type for the response data
interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

class AxiosHelper {
  private instance = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API base URL
    timeout: 10000, // Adjust timeout as needed
    headers: {
      'Content-Type': 'application/json',
      // You can add any default headers here
    },
  });

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.get(url, config);
      return response.data;
    } catch (error) {
      throw this.handleAxiosError(error);
    }
  }

  public async post<T, U>(
    url: string,
    data: T,
    config?: AxiosRequestConfig,
  ): Promise<U> {
    try {
      const response: AxiosResponse<U> = await this.instance.post(
        url,
        data,
        config,
      );
      return response.data;
    } catch (error) {
      throw this.handleAxiosError(error);
    }
  }

  // Add methods for other HTTP methods (e.g., PUT, DELETE) as needed

  private handleAxiosError(error: AxiosError): Error {
    if (error.response) {
      // The request was made and the server responded with a status code
      const {status, statusText, data} = error.response;
      return new Error(
        `Request failed with status ${status}: ${statusText}\n${JSON.stringify(
          data,
        )}`,
      );
    } else if (error.request) {
      // The request was made but no response was received
      return new Error('Request failed: no response received');
    } else {
      // Something happened in setting up the request that triggered an error
      return new Error(`Request setup failed: ${error.message}`);
    }
  }
}

// Example usage:
const api = new AxiosHelper();

// Make a GET request
api
  .get<ApiResponse<any>>('/data')
  .then(response => {
    console.log('Data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

// Make a POST request
const postData = {
  /* Your data object */
};
api
  .post<RequestData, ApiResponse<any>>('/endpoint', postData)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
