import React from 'react';
import { useState, useEffect } from 'react';

import styles from './Comments.module.css';

import { fetchPostComments } from '../../../app/RedditAPI';
import { dateCalculator } from '../postFooter/PostFooter';

export const Comments = (props) => {
  const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   fetchPostComments(props.permalink).then((jsonComments) =>
  //     setComments(
  //       jsonComments.map((comment) => (
  //         <div className={styles.comment} key={comment.id}>
  //           <div className={styles.commentHeader}>
  //             <p className={styles.commentAuthor}>{comment.author}</p>
  //             <p className={styles.commentDate}>
  //               {dateCalculator(comment.created_utc)}
  //             </p>
  //           </div>
  //           <p>{comment.body}</p>
  //         </div>
  //       ))
  //     )
  //   );
  // }, [props.permalink]);


  useEffect(() => {
    let isMounted = true;
    async function fetchComments() {
      try {
        const jsonComments = await fetchPostComments(props.permalink);
        if (isMounted) {
          setComments(
            jsonComments.map((comment) => (
              <div className={styles.comment} key={comment.id}>
                <div className={styles.commentHeader}>
                  <p className={styles.commentAuthor}>{comment.author}</p>
                  <p className={styles.commentDate}>
                    {dateCalculator(comment.created_utc)}
                  </p>
                </div>
                <p>{comment.body}</p>
              </div>
            ))
          );
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }
    fetchComments();
    return () => {
      isMounted = false;
    };
  }, [props.permalink]);

  

  return (
    <div
      id={props.id}
      className={props.visible === true ? styles.isShown : styles.isNotShown}
    >
      {comments}
    </div>
  );
};

//{console.log(JSON.stringify(comment))}
