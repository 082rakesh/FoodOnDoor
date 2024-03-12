import {apiUrl} from './Api';
import {GenericRequest} from './GenericRequest';

const ApiManager = {
  get: async (request: GenericRequest) => {
    const response = await apiUrl.get(request.apiName);
    return response.data;
  },
};
export default ApiManager;
