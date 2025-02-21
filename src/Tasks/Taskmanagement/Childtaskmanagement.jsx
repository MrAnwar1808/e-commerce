
import React from "react";
import Grandtaskmanagement from "./Grandtaskmanagement";

const Childtaskmanagement = (props) => {
    return(
        <div className="childtask">

            <p><strong>Task Name: </strong>{props.task.name}</p>
            <p><strong>Due Date: </strong>{props.task.dueDate}</p>
            <Grandtaskmanagement priority={props.task.priority}/>

        </div>
    )
} 

export default Childtaskmanagement