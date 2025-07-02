import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { Header } from './features/header/Header';
import { Posts } from './features/posts/Posts';
import { IndividualPost } from './features/posts/individualPost/IndividualPost';
import { Subreddits } from './features/subreddits/Subreddits';
import { fetchSubredditPosts } from './app/RedditAPI';
import { fetchPosts } from './features/posts/postsSlice';
import { selectActiveSubreddit } from './features/subreddits/subredditsSlice';

function App() {
  const activeSub = useSelector(selectActiveSubreddit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(activeSub));
  }, [activeSub, dispatch]);

  dispatch(fetchPosts(activeSub));

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/post/:id" element={<IndividualPost />} />
          </Routes>
          <Subreddits logo={logo} />
        </main>
      </div>
    </Router>
  );
}

export default App;
