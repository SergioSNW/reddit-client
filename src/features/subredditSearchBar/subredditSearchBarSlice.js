// Example for Redux Toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch subreddit posts
export const fetchSubredditPosts = createAsyncThunk(
  'subreddit/fetchPosts',
  async (subredditName, thunkAPI) => {
    const response = await fetch(
      `https://www.reddit.com/r/${subredditName}/hot.json`
    );
    if (!response.ok) throw new Error('Subreddit not found');
    const data = await response.json();
    return data.data.children;
  }
);

const subredditSearchBarSlice = createSlice({
  name: 'subredditSearchBar',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubredditPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubredditPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchSubredditPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default subredditSearchBarSlice.reducer;
