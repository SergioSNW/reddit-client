import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { Header } from './features/header/Header';
import { Posts } from './features/posts/Posts';
import { IndividualPost } from './features/posts/individualPost/IndividualPost';
import { Subreddits } from './features/subreddits/Subreddits';
import { fetchSubredditPosts } from './app/RedditAPI';
import { changePosts, fetchPosts } from './features/posts/postsSlice';
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
      <Fragment>
        <div className="App">
          <Header />
          <h1>Hello World</h1>
          <main>
            <Routes>
              <Route
                exact
                path="/post/:id"
                element={<IndividualPost />}
              ></Route>
            </Routes>
            <Routes>
              <Route exact path="/" element={<Posts />}></Route>
            </Routes>
            <IndividualPost />
            <Posts />

            <Subreddits logo={logo.svg} />
          </main>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
