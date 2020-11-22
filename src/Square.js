import React from "react";
import { useCountRenders } from "./useCountRenders";

// unmoubt error message calling setState when it is gone
//memo -> compare props and only render when the props change not impacted by render of parents
export const Square = React.memo(({num, increment}) => {
    useCountRenders();
    return <button onClick={() => increment(num)}>{num}</button>
});

