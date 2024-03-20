import axios, {AxiosResponse} from 'axios';
import {GenericRequest} from './GenericRequest';
import {GenericResponse} from './GenericResponse';

type GeneResponse = {
  isSuccess?: boolean;
  jsonBody?: string;
  data?: any;
};
class AxioClient {
  private instance = axios.create();

  public async get<T>(request: GenericRequest): Promise<T> {
    let genericResponse: GeneResponse = new GenericResponse<GeneResponse>();

    try {
      const response: AxiosResponse<T> = await this.instance.get(
        request.apiName,
      );
      if (response.status === 200 && response.data != null) {
        genericResponse.isSuccess = true;
        genericResponse.data = response.data;
      } else {
        genericResponse.isSuccess = false;
      }
      return genericResponse;
    } catch (error) {
      genericResponse.isSuccess = false;
      return genericResponse;
    }
  }
}

export default AxioClient;

/*

public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.get(url, config);
      return response.data;
    } catch (error) {
      throw this.handleAxiosError(error);
    }
  }

  */
