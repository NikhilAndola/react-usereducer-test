import React, { useReducer } from 'react';
import './style.css';
import { usePower } from './Sum';

export default function App() {
  const [num] = usePower(20);

  const initialState = { count: 10, isReady: false, color: 'red' };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'readyState':
        return { isReady: !state.isReady };
      default:
        return { count: state.count, isReady: state.isReady };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state', state);
  return (
    <div>
      <h1>Hello custom hook {num}</h1>
      <p>Start editing to see some magic happen :)</p>
      <h2>useReducer in action</h2>
      {state.count}
      <br />
      <button onClick={() => dispatch({ type: 'increment' })}>
        reducer button
      </button>
      <br />
      {state.isReady ? 'Am ready' : ''}
      <button onClick={() => dispatch({ type: 'readyState' })}>
        Toggle ready state
      </button>
    </div>
  );
}
