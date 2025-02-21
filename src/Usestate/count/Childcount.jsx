
import { useState } from "react";

function Childcount({initialCount}){

    const [count , setcount] = useState(initialCount)
    return(
        <div>
            <h1>The actuall Count is {count}</h1>
            <button onClick={() => setcount(count + 1)}>Increment</button>
            <button onClick={() => setcount(initialCount)}>Reset</button>

        </div>
    )
}

export default Childcount