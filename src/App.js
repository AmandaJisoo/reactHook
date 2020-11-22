import React, { useReducer } from "react";
import './App.css';

// line 22, 23 : I pass to the second argument of displatch
function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
        return state + 1
    case 'DECREMENT':
      return state -1;
    default:
      return state;
  }
}

//only with function
const App = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => dispatch( {type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch( {type: 'DECREMENT' })}>-</button>
    </div>
  );
}

export default App;
