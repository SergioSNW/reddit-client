import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './SubredditsDropdown.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  addSubreddit,
  changeActiveSubreddit,
} from '../subreddits/subredditsSlice';

export const SubredditsDropdown = (props) => {
  const dispatch = useDispatch();

  const activeSub = useSelector((state) => state.subreddits.activeSubreddit);
  const subReddits = useSelector((state) => state.subreddits.subReddits);

  const onOptionSelected = (e) => {
    dispatch(changeActiveSubreddit(e.target.value));
  };

  const dropdown = (subs) => {
    return (
      <select
        className={styles.subSelector}
        value={activeSub}
        onChange={onOptionSelected}
      >
        {subs.map((sub) => (
          <option key={sub.id} value={sub.url}>
            {sub.name}
          </option>
        ))}
      </select>
    );
  };

  return (
    <section className={styles.subreddits}>{dropdown(subReddits)}</section>
  );
};
