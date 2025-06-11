import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSubredditPosts } from '../../app/RedditAPI';

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    changePosts: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading'; // Requires initialState to include status
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        return action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
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
