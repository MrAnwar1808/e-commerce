
import React from "react";
import Grandchildteam from "./Grandchildteam";

const Childteam = (props) => {
    return(
        <div className="Childteam">

            <p><strong>Name: </strong>{props.player.name}</p>
            <p><strong>Position: </strong>{props.player.position}</p>
            <Grandchildteam teamNumber={props.player.teamNumber}/>

        </div>
    )
}

export default Childteam