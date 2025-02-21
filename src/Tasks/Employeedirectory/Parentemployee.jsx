
import React from "react";
import Childemployee from "./Childemployee";
import "./employee.css"

const ParentEmployee = () => {

    const employees = [
        { name: 'Devendar', position: 'Manager', department: 'HR' },
        { name: 'Anwar', position: 'Java Developer', department: 'IT' },
        { name: 'Anwar', position: 'QA tester', department: 'IT' },
        { name: 'Anwar', position: 'Web Designer', department: 'IT' },
        { name: 'Anwar', position: 'React Developer', department: 'IT' }
      ];
    
    return(
        <div className="parentemployee">
             <h1>Employee Directory</h1>
             {employees.map((employee, index) => (
             
             <Childemployee key={index} employee={employee} />
      ))}

        </div>
    )
}

export default ParentEmployee