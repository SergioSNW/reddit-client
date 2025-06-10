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
import { changePosts } from './features/posts/postsSlice';

function App() {
  const activeSub = useSelector((state) => state.subreddits.activeSubreddit);
  const dispatch = useDispatch();

  useEffect(
    () =>
      fetchSubredditPosts(activeSub).then((response) => {
        dispatch(changePosts(response));
      }),
    [activeSub]
  );

  return (
    <Router>
      <Fragment>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route
                exact
                path="/individualPost"
                element={<IndividualPost />}
              ></Route>
            </Routes>
            <Routes>
              <Route exact path="/" element={<Posts />}></Route>
            </Routes>

            <Subreddits logo={logo.svg} />
          </main>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
