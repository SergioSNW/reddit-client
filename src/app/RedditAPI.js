import React from 'react';

export const WEB_Root = 'https://reddit.com';

// Asynchronous function for fetching Subreddits
export const fetchSubreddits = async () => {
  const response = await fetch(`${WEB_Root}/subreddits.json`);
  const json = await response.json();

  // Returns the data from the children of the Json
  return json.data.children.map((subreddit) => subreddit.data);
};

// ASynchronous function for fetching subreddit posts
export const fetchSubredditPosts = async (subreddit) => {
  const response = await fetch(`${WEB_Root}${subreddit}.json`);
  const json = await response.json();

  // Returns the data from the children of the Json
  return json.data.children.map((post) => post.data);
};

// Fetch comments
export const fetchPostComments = async (permalink) => {
  const response = await fetch(`${WEB_Root}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};
