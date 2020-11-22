import React, { useState, useCallback, useMemo } from "react";
import { Hello } from'./Hello';
import { Square } from'./Square';
import { useFetch } from './useFetch'; 
import './App.css';


//only with function
function App() {
  const [count, setCount] = useState(0);
  const numArray = [7, 21, 37];
  const {data} = useFetch('https://api.kanye.rest/');

  const computeLongestWord = useCallback((arr) =>  {
    if (!arr) {
      return [];
    }

    let longestWord = arr.quote;
    //general idea something like this, something is wrong 
    // (arr.quote).forEach(sentence => 
    //   sentence.split(" ").forEach(word => {
    //     if (word.length > longestWord.length) {
    //       longestWord = word;
    //     }
    // }));
    return longestWord;
  }, []);

  const longestWord = useMemo(() => computeLongestWord(data), [data, computeLongestWord])

  //CASE for Callback1
  //when count or setCount cahnges, the function will be recreated
  //only called one initalization 
  //as the function never change so it won't rerender
  //when you use memo
  const increment = useCallback( 
   n => {setCount(count => count + n);},
    [setCount]
  );

  //CASE for callback2-> useEffect
  return (
    <div>
      {/* everytime the app is rendered, the increment function is newly created */}
        <Hello increment={increment} />
        {count}
        {/* the call back prevents unnecessay rerender everytime, just update count */}
        {/* whenever mapping, we can use call back and prevent new creation every iteration */}
        {numArray.map(n => {
          return(
            <Square increment={increment} num={n} key={n} />
          )
        })}
        <div>{longestWord}</div>
    </div>
  );
}

export default App;
