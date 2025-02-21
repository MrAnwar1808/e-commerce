
import { useState } from "react";
import './Countclick.css'

function Countclick(){
    const [click , setClick] = useState(0)

    return (
        <div className="countclick">
      <p>You clicked {click} times</p>
      <button
        onClick={() => setClick(click + 1)}
        className="countclick-button"
      >
        Click me
      </button>
    </div>
    );
}

export default Countclick