
import React from "react";
import Childteam from "./Childteam";
import "./Teamroaster.css"

const Parentteam = () => {

    const players = [
        { name: 'Rahul', position: 'Forward', teamNumber: 10 },
        { name: 'Rohit', position: 'Midfielder', teamNumber: 45 },
        { name: 'Kohli', position: 'Slip', teamNumber: 18 },
        { name: 'Pant', position: 'Keeper', teamNumber: 8 },
        { name: 'Nitish', position: 'Boundary', teamNumber: 77 },
        { name: 'Bumrah', position: 'Bowler', teamNumber: 23 }
      ];

    return(
        <div className="parentteam">

            <h1>Team Roster</h1>
            {players.map((player, index) => (
            <Childteam key={index} player={player} />
      ))}

        </div>
    )
}

export default Parentteam