


import React from "react";
import Child from "./Childcomp";
import './Parentcomp.css'


const Parent = () => {

    const username = 'Anwar'


    const Userid = '1234'


    const employees = ['Developer: 6',
                       'Testers : 4',
                       'Team-leaders : 2',
                       'Project Manager : 2',
                       'Web-designer : 3'            
                      ]


    const user = { name: 'war', email: 'anwar@example.com', role: 'Developer' }

    const handleButtonClick = () => {
        alert('Button clicked!');
      }

    return(
       
        <div className="parent-container">

             <Child name = {username}
                      id = {Userid}
                    show = {true}
                  //show = {false}
               employees = {employees}
                    user = {user}
             handleClick = {handleButtonClick} 

        />
        </div>

    )
}

export default Parent