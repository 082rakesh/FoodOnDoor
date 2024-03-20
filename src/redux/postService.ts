import {createAsyncThunk} from '@reduxjs/toolkit';
import {GenericRequest} from '../network/http/GenericRequest';
import ApiManager from '../network/http/ApiManager';
import {GenericResponse} from '../network/http/GenericResponse';
import {Posts} from '../model/Post';
import {ALL_POSTS} from '../utils/Constants';

type responseType = {
  isSuccess: false;
  data: Posts;
};
export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
  const request = new GenericRequest();
  request.apiName = ALL_POSTS;
  try {
    const response = (await ApiManager.get(
      request,
    )) as GenericResponse<responseType>;
    return response.data;
  } catch (error) {
    console.log('catch error');
  }
});
