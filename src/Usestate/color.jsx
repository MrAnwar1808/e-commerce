
import { useState } from "react";
import './color.css'


function FavoriteColor() {
    const [color, setColor] = useState("red");

   
    return (
        <div className="color-container">
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          className="btn"
          onClick={() => setColor("blue")}
        >
          Click me!
        </button>
      </div>
    )
  }

  export default FavoriteColor