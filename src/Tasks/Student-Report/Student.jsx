
import React from "react";
import Grades from "./Grades";
import "./student.css";

const Student = () => {

    const students = [
        { name: 'Anwar', grades: [85, 90, 88] },
        { name: 'Farhan', grades: [78, 80, 85] },
        { name: 'Ali', grades: [92, 88, 94] }
      ];

    return(
        <div>
        
        <Grades students={students}/>
        
        </div>

    )
}
export default Student