import React, { useReducer, useState } from "react";
import './App.css';

// line 22, 23 : I pass to the second argument of displatch
//I don't want to modifu actual state, return new ver of state
function reducer(state, action) {
  switch(action.type) {
    case "add-todo":
        return { 
          todos: [...state.todos, {text: action.text, completed: false}],
          todoCount: state.todoCount +1
        }
    case "toggle-todo":
      console.log("nani?");
      return {
        todos: state.todos.map((t, idx) => idx === action.idx? {...t, completed: !t.completed} : t),
        todoCount: state.todoCount
      }
    default:
      return state;
  }
}

//only with function
const App = () => {
                                        //reducer is a function and 
  const [{todos, todoCount}, dispatch] = useReducer(reducer, { todos: [], todoCount: 0 });
  const [text, setText] = useState();
  return (
    <div>
        <form onSubmit={evt => {
          evt.preventDefault();
          dispatch({type: "add-todo", text});
          setText("");
        }}>
        <input value={text} onChange={evt => setText(evt.target.value)}></input>
        </form>
      <div>num of to-dos: {todoCount}</div>
        {todos.map((t, idx) => (
          <div key={idx} 
          onClick={() => dispatch({type: "toggle-todo", idx})}
          style={{
            textDecoration: t.completed? 'line-through': ""
          }}> 
            {t.text}
          </div>
        ))}
      </div>
  );
}

export default App;
