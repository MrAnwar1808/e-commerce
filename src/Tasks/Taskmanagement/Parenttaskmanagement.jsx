
import React from "react";
import Childtaskmanagement from "./Childtaskmanagement";
import "./Taskmanagement.css"

const Parenttaskmanagement  = () => {

    const tasks = [
        { name: 'News hub', dueDate: '2025-01-10', priority: 'High' },
        { name: 'Dell', dueDate: '2025-02-15', priority: 'Medium' },
        { name: 'Sony', dueDate: '2025-02-15', priority: 'Medium' },
        { name: 'Reactor Ross', dueDate: '2025-02-15', priority: 'Medium' },
      ];

    return(

        <div className="parenttask">

            <h1>Task Management System</h1>
            {tasks.map((task, index) => (
            <Childtaskmanagement key={index} task={task} />
            ))}

        </div>
    )
}

export default Parenttaskmanagement