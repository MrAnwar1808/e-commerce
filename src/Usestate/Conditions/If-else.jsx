
import { useState } from "react";

function Ifelse()  {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  
    let button;
    if (isLoggedIn) {
      button = <button>Logout</button>;
    } else {
      button = <button>Login</button>;
    }
  
    return (
      <div>
        <h1>If-Else Example: </h1>
        {button}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Toggle Login/Logout
        </button>
      </div>
    )
  }

export default Ifelse
