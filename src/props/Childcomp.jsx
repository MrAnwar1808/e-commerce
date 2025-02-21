

import React from "react";
import './Childcomp.css'

const Child = (props) => {
    
    return(
     
        <div className="child-container">

            {/* string */}
            <h1>Hello {props.name}!</h1>

            {/* number */}
            <p><strong>ID: </strong>{props.id}</p>

            {/* boolean */}
            {props.show ? <h3>Monday working day<br></br>
                             Tuesday working day<br></br>
                             Wednesday working day<br></br>
                             Thursday working day<br></br>
                             Friday working day<br></br>
                           </h3>
                            : 
                          <h2>Saturday weekend Holiday<br></br>
                              Sunday weekend Holiday<br></br>
                          </h2>}

             {/* Array  */}
            <ul>
                <h1>Employee's in the project</h1>
                {props.employees.map((employee, index) => (
                <li key={index}>{employee}</li>
                ))}
            </ul>

             {/* object */}
            <div> 
                 <h2>Current Employee Details :</h2>
                 <p>Name  : {props.user.name}</p>
                 <p>Email : {props.user.email}</p>
                 <p>Role  : {props.user.role}</p>

            </div>

            {/* Button */}

            <button className="btn" onClick={props.handleClick}> Click Me </button>


        
        </div>



    )
}
export default Child










  