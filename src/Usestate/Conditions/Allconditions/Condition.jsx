
import { useState } from "react";
import './Conditon.css'


function ConditionalRendering() {
   
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [isSubscribed, setIsSubscribed] = useState(true)
  
  
    let content;
    if (isLoggedIn) {
      // content = <button className="logoutButton">Logout</button>
      content = "Welcome to KHKR team";
    } else {
      // content = <button className="loginButton">Login</button>;
      content = "Welcome to KHKR innovators Tech Pvt Ltd"
    }
  
    return (
      <div>
        <div className="ifelse">
          <h2>If-Else Example: </h2>

          <p>
            {content}
          </p>
          

          <button className="toggleButton" onClick={() => setIsLoggedIn(!isLoggedIn)} >
            {/* Toggle Login/Logout */}
            Toggle Message
          </button>
        </div>
  


        <div className="logic">
          <h2>Logical && Example: </h2>
          <p>
          {showMessage && <p>Hellooo 😊😊😊!</p>}
          </p>
          
          <button className="toggleButton" onClick={() => setShowMessage(!showMessage)} >
            Toggle Message
          </button>
      
        </div>

        <div className="ternary">
          <h2>Ternary Operator Example: </h2>
         
          
          {isSubscribed ? 
          // (<button className="btn">Unsubscribe</button>)
          (<p>This is my Ternary Text to Toggle</p>) :
           
          (<p>This is my Ternary Text i wanted</p>)
           //(<button className="btn">Subscribe</button>)
           }
          <button className="toggleButton" onClick={() => setIsSubscribed(!isSubscribed)}>
            Toggle Message
          </button>
        </div>
  
      
      </div>
    )
  }
  
  export default ConditionalRendering;