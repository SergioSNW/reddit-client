import { createStore } from 'redux';

// Action Creators
export function increment() {
  return { type: 'increment' };
}

export function decrement() {
  return { type: 'decrement' };
}

// Reducer / Store
const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};
export const store = createStore(countReducer);
