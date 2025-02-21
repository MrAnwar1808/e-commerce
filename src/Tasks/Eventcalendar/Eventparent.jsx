
import React from "react";
import Eventchild from "./Eventchild";
import "./Eventcalendar.css"

const Eventparent = () => {

    const events = [
        { name: 'New Year Eve', date: '2025-01-01', location: 'Hyderabad' },
        { name: 'Big Bash', date: '2025-03-02', location: 'Australia' },
        { name: 'IPL', date: '2025-04-20', location: 'Hyderabad' },
        { name: 'BGT', date: '2025-01-03', location: 'Australia' }
      ];

      const handleButtonClick = () => {
        alert('Thanks For Registration😊!!');
      }
    

    return(
        <div className="eventparent">
             <h1>Event Calendar</h1>
             {events.map((event, index) => (
            
             <Eventchild key={index} event={event}
             handleClick={handleButtonClick} />
      ))}

        </div>
    )
}

export default Eventparent