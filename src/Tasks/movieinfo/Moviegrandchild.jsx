import React from "react";

const Moviegrandchild = () => {
  const showTimings = ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"];

  return (
    <div className="moviegrandchild">
      <p><strong>Show Timings:</strong></p>
      <ul>
        {showTimings.map((time, index) => (
          <li key={index}>{time}</li>
        ))}
      </ul>
    </div>
  );
}

export default Moviegrandchild;
