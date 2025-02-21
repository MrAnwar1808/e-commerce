import React from "react";
import Moviegrandchild from "./Moviegrandchild";

const Childmovie = (props) => {
  return (
    <div className="moviechild">
      {props.movies.map((movie, index) => (
        <div key={index} className="movie-card"> {/* Changed to .movie-card */}
          <img src={`/images2/${movie.image}`} alt={movie.title} />
          <p><strong>Title: </strong>{movie.title}</p>
          <p><strong>Screen: </strong>{movie.screen}</p>
          <button onClick={props.handleClick} className="btn">Book your Ticket Here</button>
          <Moviegrandchild />
        </div>
      ))}
    </div>
  );
}

export default Childmovie;
