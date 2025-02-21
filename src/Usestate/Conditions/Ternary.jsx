
import { useState } from "react";

function Ternary(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="section">
        <h2>Ternary  Example: </h2>
       
        {isLoggedIn ? (
          <button className="logoutButton">Logout</button>
        ) : (
          <button className="loginButton">Login</button>
        )}
        <button className="actionButton" onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Toggle Login/Logout
        </button>
      </div>
    )
}

export default Ternary