import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { useFetch } from "./useFetch";
import { useMeasure } from "./useMeasure";
// unmoubt error message calling setState when it is gone

export const Hello = () => {
    const renders = useRef(0);

    //not going to caue rerender;
    // console.log("hello renders", renders.current++);

    const[count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));
    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`);

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);


    //                     dependncy passed in
    //                     we alredy know which val to referene based on ref tag
    const [rect, divRef] = useMeasure([data]);

    return (
    <div>
        <div style={{ display: "flex" }}> 
            <div ref={divRef}>{ !data? "loading..." : data }</div>
        </div>
        <pre>
            {JSON.stringify(rect, null, 2)}
        </pre>
        <button onClick={() => setCount(c => c + 1)}> Increment Count</button>
    </div>);

}

