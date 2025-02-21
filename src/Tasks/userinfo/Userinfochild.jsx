
import React from "react";
import Userinfograndchild from "./Userinfograndchild";

const Userinfochild = (props) => {
  
    
    return(

       <div className="child">
         <p><strong>Name: </strong>{props.user.name},<br />
             <strong>Role: </strong>{props.user.role}</p>

         <Userinfograndchild address={props.user.address}/>

       </div>

    )
}

export default Userinfochild