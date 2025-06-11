import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSubredditPosts } from '../../app/RedditAPI';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    changePosts: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (subreddit) => {
    const response = await fetchSubredditPosts(subreddit);
    return response;
  }
);

// Add extraReducers to handle promise states

export const { changePosts } = postsSlice.actions;
export default postsSlice.reducer;
