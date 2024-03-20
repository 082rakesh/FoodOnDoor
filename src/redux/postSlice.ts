import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Post} from '../model/Post';
import {fetchPosts} from './postService';

type PostData = {
  posts: Post[];
  status: 'idle' | 'succeeded' | 'failed';
  error: null;
};

const initialState: PostData = {
  posts: [],
  status: 'idle',
  error: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status = 'idle';
        console.log('fetch post pending state');
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = 'succeeded';
        state.posts = state.posts.concat(action.payload);
      });
  },
});

export const {addPost} = postSlice.actions;
export default postSlice.reducer;

/*
.addCase(fetchPosts.rejected, (state, action: PayloadAction<Error>) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
*/
