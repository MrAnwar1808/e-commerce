
import React from "react";

const Grades = ({students}) => {

    const studentGrades = students.map(student => {

    const total = student.grades.reduce((acc, grade) => acc + grade, 0)

    const average = total / student.grades.length;
    
    return { ...student, average }

    
      })
       
    return(
        <div className="grades">
            
            <h1>Student Grades</h1>
        <ul>
          {studentGrades.map((student, index) => (
          <li key={index}>
          <p><strong>Student Name: </strong>{student.name}</p>
          <p><strong>Average Grade: </strong>{student.average}</p>
          </li>
          ))}
        </ul>

      </div>
    )
  }

  export default Grades
