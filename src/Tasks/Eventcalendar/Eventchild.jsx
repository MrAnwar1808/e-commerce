
 import React from "react";
import Eventgrandchild from "./Eventgrandchild";

 const Eventchild = (props) => {
    return(
        <div className="eventchild">

            
            <p><strong>Event Name: </strong>{props.event.name}</p>
            <p><strong>Date: </strong>{props.event.date}</p>

            <Eventgrandchild location={props.event.location}/>

             <button className="btn" onClick={props.handleClick}>Register Here!</button>

        </div>
    )
 }

 export default Eventchild