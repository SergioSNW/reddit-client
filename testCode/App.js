import React from 'react';
import { increment, decrement } from './store';

function App({ state, dispatch }) {
  // Dispatch increment action
  const incrementerClicked = () => {
    dispatch({ type: 'increment' });
  };
  // Dispatch decrement action
  const decrementerClicked = () => {
    dispatch({ type: 'decrement' });
  };

  return (
    <main>
      <p id="counter">{state}</p>
      <button id="incrementer" onClick={incrementerClicked}>
        +
      </button>
      <button id="decrementer" onClick={decrementerClicked}>
        -
      </button>
    </main>
  );
}

export default App;
