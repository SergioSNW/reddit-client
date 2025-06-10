import React from 'react';
import styles from './Likes.module.css';
import { upArrow, downArrow } from '../../../app/arrowsSVG';

export const Likes = (props) => {
  const onUpArrowClicked = (e) => {
    if (e.target.firstChild.getAttribute('fill') === 'black') {
      e.target.firstChild.setAttribute('fill', 'green');
      e.target.parentNode.lastChild.firstChild.setAttribute('fill', 'black');
      e.target.parentNode.children[1].style.color = 'green';
    } else {
      e.target.firstChild.setAttribute('fill', 'black');
      e.target.parentNode.children[1].style.color = 'black';
    }
  };

  const onDownArrowClicked = (e) => {
    if (e.target.firstChild.getAttribute('fill') === 'black') {
      e.target.firstChild.setAttribute('fill', 'red');
      e.target.parentNode.firstChild.firstChild.setAttribute('fill', 'black');
      e.target.parentNode.children[1].style.color = 'red';
    } else {
      e.target.firstChild.setAttribute('fill', 'black');
      e.target.parentNode.children[1].style.color = 'black';
    }
  };

  return (
    <div className={styles.likes}>
      <div onClick={onUpArrowClicked} className={styles.upVotesButton}>
        {upArrow}
      </div>
      <p>
        {props.postsUps >= 1000
          ? Math.round((props.postsUps / 1000) * 10) / 10 + 'k'
          : props.postsUps}
      </p>
      <div onClick={onDownArrowClicked} className={styles.upVotesButton}>
        {downArrow}
      </div>
    </div>
  );
};
