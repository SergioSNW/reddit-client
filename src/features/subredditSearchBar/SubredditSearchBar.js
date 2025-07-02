import React, { useState } from 'react';

export default function SubredditSearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput('');
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Search for a subreddit"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
      <button type="submit" style={{ marginLeft: '0.5rem' }}>
        Search
      </button>
    </form>
  );
}
