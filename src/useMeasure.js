import React, { useState, useLayoutEffect, useRef } from "react";

export const useMeasure = (dependency) => {
    const [rect, setRect] = useState({});
    const  myRef = useRef();

    //recaculat the rect size whenever new data is loaded
    useLayoutEffect(() => {
        setRect(myRef.current.getBoundingClientRect());
    }, dependency);

    return [rect, myRef];
}