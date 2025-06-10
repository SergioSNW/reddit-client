import React, { useState } from 'react';
import { Comments } from '../comments/Comments';
import styles from './PostFooter.module.css';

export const dateCalculator = (created) => {
  const currentDate = Date.now();
  const postDate = new Date(created * 1000);

  const dateDifferenceInTime = currentDate - postDate;

  const dateDifferenceInMonths =
    dateDifferenceInTime / (1000 * 3600 * 24 * 30.4);
  const dateDifferenceInDays = dateDifferenceInTime / (1000 * 3600 * 24);
  const dateDifferenceInHours = dateDifferenceInTime / (1000 * 3600);
  const dateDifferenceInMinutes = dateDifferenceInTime / (1000 * 60);

  if (dateDifferenceInMonths > 12) {
    return 'more than a year ago';
  } else if (dateDifferenceInMonths >= 1) {
    return Math.round(dateDifferenceInMonths) + ' months ago';
  } else if (dateDifferenceInDays >= 1) {
    return Math.round(dateDifferenceInDays) + ' days ago';
  } else if (dateDifferenceInHours >= 1) {
    return Math.round(dateDifferenceInHours) + ' hours ago';
  } else if (dateDifferenceInMinutes >= 1) {
    return Math.round(dateDifferenceInMinutes) + ' minutes ago';
  } else {
    return 'less than a minute ago';
  }
};

export const PostFooter = (props) => {
  const [active, setActive] = useState(false);

  const commentsIcon = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      version="1.2"
      baseProfile="tiny"
      viewBox="0 0 24 24"
      className="icon-action"
      height="1.5rem"
      width="1.5rem"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 7c.542 0 1 .458 1 1v7c0 .542-.458 1-1 1h-8.829l-.171.171v-.171h-3c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12m0-2h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3h1v3l3-3h8c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3z"></path>
    </svg>
  );

  const onCommentsClicked = () => {
    const postComments = document.getElementById(props.postId);
    if (active) {
      postComments.style.display = 'none';
      setActive(false);
    } else {
      postComments.style.display = 'block';
      setActive(true);
    }
  };

  return (
    <footer>
      <ul className={styles.postInfos}>
        <li>
          <span>{props.postAuthor}</span>
        </li>
        <li>{dateCalculator(props.postCreated)}</li>
        <li onClick={onCommentsClicked} className={styles.commentsIcon}>
          {commentsIcon}
          <span>{props.postComments}</span>
        </li>
      </ul>
      <Comments
        permalink={props.postPermalink}
        id={props.postId}
        visible={props.visible}
      />
    </footer>
  );
};
