import React, { useRef }from "react";
import { useCountRenders } from "./useCountRenders";

// unmoubt error message calling setState when it is gone
//memo -> compare props and only render when the props change not impacted by render of parents
export const Hello = React.memo(({increment}) => {
//  useCountRenders();
    return <button onClick={() => increment(5)}> hey yo</button>
});

