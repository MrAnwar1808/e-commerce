
import React from "react";
import Childcount from "./Childcount";
import './count.css'

function Parentcount(){
    return(
        <div className="count">
            <h3>Increment and Reset the count</h3>
            <Childcount initialCount={0}/>
        </div>
    )
}

export default Parentcount