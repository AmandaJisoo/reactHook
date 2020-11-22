import React, {useState, useEffect, useRef, useLayoutEffect } from "react";
import { useForm } from "./useForms";
import { Hello } from './Hello.js'
import './App.css';
import { useMeasure } from "./useMeasure";

//only with function
function App() {
  //10 is intial val or have function to return inital val if computation is
  //expensives
  //can have as many setCounts
  const [values,handleChange] = useForm({email: "", password: '', firstName: ""});
  //value of pw and email are from the state
  //useForms is a spcial casing

  const [showHello, setShowHello] = useState(true);

  const [rect, inputRef2] = useMeasure();
  //every time this component rerender, this render
  //only whenever I want to change pw or email change
  useEffect(() => {
    //console.log("wow pw or email changed");
    // const onMouseMove = e => {
    //   console.log(e)
    // }
    //window.addEventListener('mousemove', onMouseMove);

    //clean up fucnction
    //same as class' unmount and we clean up old value
    return() => {
      //console.log("unmount");
      //window.removeEventListener('mousemove', onMouseMove)
    }
  }, [values.email , values.password]);


  //Fire in the written order
  useEffect(() => {
    //console.log(1);
  });

  useEffect(() => {
    //console.log(2);
  });

  //const[count, setCount] = useState(0);
  //would work for object and arrays...
  // const[count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));
  // const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
  const inputRef = useRef([]);

  //treat it as a field or instants variables opposed to you would store in state
  const hello = useRef(() => {
    console.log("Hello");
  })

  // useEffect(() => {
  //   localStorage.setItem("count", JSON.stringify(count));
  // }, [count]);

  // measurement of DOM Node
  useLayoutEffect(() => {
      console.log(inputRef.current.getBoundingClientRect());
  }, []);

  return (
    <div>
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && 
        <div>
        <Hello></Hello>
        </div>}
      <input ref={inputRef2} name='firstName' value={values.firstName} onChange={handleChange} placeholder="firstName" />
      <input ref={inputRef} name='email' value={values.email} onChange={handleChange} />
      <input type='password' name='password' value={values.password} onChange={handleChange} />
      {/* get the value -> get value by  inputRef.current*/}
      {/* focus -> highlight the box*/}
      {/* access if the hello exists as a component */}
      <button onClick={() => 
        {console.log(inputRef.current.focus());
                    hello.current();}}> focus 
      </button>
    </div>
  );
}

export default App;
