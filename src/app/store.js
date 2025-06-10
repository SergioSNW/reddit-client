import { configureStore } from '@reduxjs/toolkit';
import searchBarSlice from '../features/header/searchBar/searchBarSlice';
import subredditsSlice from '../features/subreddits/subredditsSlice';
import individualPostSlice from '../features/posts/individualPost/individualPostSlice';
import postsSlice from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    search: searchBarSlice,
    posts: postsSlice,
    subreddits: subredditsSlice,
    individualPostId: individualPostSlice,
  },
});
