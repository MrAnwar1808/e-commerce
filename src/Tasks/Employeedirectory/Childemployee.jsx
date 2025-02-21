
import React from "react";
import Grandchildemployee from "./Grandchildemployee";

const Childemployee = (props) => {
    return(
        <div className="childemployee">

  
      <p><strong>Name: </strong>{props.employee.name}</p>
      <p><strong>Position: </strong>{props.employee.position}</p>
      <Grandchildemployee department={props.employee.department} />
             
        </div>
    )
}

export default Childemployee