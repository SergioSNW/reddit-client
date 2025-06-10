import React, { useEffect } from 'react';
import styles from './Subreddits.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchSubreddits } from '../../app/RedditAPI';
import { addSubreddit, changeActiveSubreddit } from './subredditsSlice';

export const Subreddits = (props) => {
  const activeSub = useSelector((state) => state.subreddits.activeSubreddit);
  const subReddits = useSelector((state) => state.subreddits.subReddits);

  const dispatch = useDispatch();

  useEffect(
    () =>
      fetchSubreddits().then((json) => {
        json.forEach((item) =>
          dispatch(
            addSubreddit({
              name: item.display_name,
              url: item.url,
              id: item.id,
              icon: item.community_icon.split('?')[0],
            })
          )
        );
      }),
    [dispatch]
  );

  return (
    <section className={styles.subreddits}>
      <ul>
        {subReddits.map((item) => (
          <Link to="/" key={item.id}>
            <li
              onClick={() => dispatch(changeActiveSubreddit(item.url))}
              className={activeSub === item.url ? styles.activeSub : undefined}
            >
              <img
                src={item.icon}
                onError={(e) => (e.target.src = props.logo)}
              />
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};
