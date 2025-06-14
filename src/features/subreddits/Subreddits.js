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

  // Bloque que provoca error:
  // useEffect que implicitamente retorna una promesa al llamar a fetchSubreddits (que tiene una llamada async)
  // mas abajo esta el reajuste del efecto para que cumpla la normativa ('useEffect must not return anything 
  // besides a function, which is used for clean-up.')
  // useEffect(
  //   () =>
  //     fetchSubreddits().then((json) => {
  //       json.forEach((item) =>
  //         dispatch(
  //           addSubreddit({
  //             name: item.display_name,
  //             url: item.url,
  //             id: item.id,
  //             icon: item.community_icon.split('?')[0],
  //           })
  //         )
  //       );
  //     }),
  //   [dispatch]
  // );

  // Modificacion para que no de error
  useEffect(() => {
    async function fetchAndDispatch() {
      const json = await fetchSubreddits();
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
    }
    fetchAndDispatch();
  }, [dispatch]);
  

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
