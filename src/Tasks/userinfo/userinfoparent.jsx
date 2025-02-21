
import React from "react";
import Userinfochild from "./Userinfochild";
import "./Userinfo.css"

const Userinfoparent = () => {

    const user = {
        name: "Anwar Farhan",
        role: "React Developer",
        address: "Naya nagar, kodad"
      }

    return(

       <div className="parent">
         <h1>User Information</h1>
         <Userinfochild user={user}/>

       </div>

    )
}

export default Userinfoparent