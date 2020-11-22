import { useEffect, useState, useRef } from 'react';
export const useFetch = (url) => {
    ///useState to store some information
    const[ state, setState] = useState({data: null, loading: false});
    const isCurrent = useRef(true);

    useEffect(() => {
        //called when the component is going to unmount
        return () => {
            //you can store whaever value and then access thorough .current
            isCurrent.current = false;
        }
    }, []);

    useEffect(() => {
        //make it smoother
        setState(state => (
            {data: state.data, loading: true}
            ));
        fetch(url)
        .then(input => input.text())
        .then(input => {
            if (isCurrent.current) {
                setState({data: input, loading: false});  
            }
        });
        //u can add function as dependency
    }, [url, setState]);

    return state;
}