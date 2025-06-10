import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './SearchBar.module.css';

import { changeActiveSearch } from './searchBarSlice';

export const SearchBar = () => {
  const dispatch = useDispatch();

  const activeSubSliced = useSelector(
    (state) => state.subreddits.activeSubreddit
  ).slice(3, -1);
  const searchBarValue = useSelector((state) => state.search);

  const onTextChange = (e) => {
    dispatch(changeActiveSearch(e.target.value));
  };

  return (
    <input
      className={styles.searchBar}
      id="Search"
      value={searchBarValue}
      placeholder={'Search posts in ' + activeSubSliced}
      onChange={onTextChange}
    />
  );
};
