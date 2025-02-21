import React from "react";
import Childmovie from "./Moviechild";
import './movie.css'

const Movies = () => {
  const movies = [
    { image: "pushpa-1.jpg", title: "PUSHPA", screen: 1 },
    { image: "pushpa-2.jpg", title: "PUSHPA-2", screen: 2 },
    { image: "devara.jpg", title: "DEVARA", screen: 3 },
    { image: "gamechanger.jpg", title: "GAME CHANGER", screen: 4 }
  ];

  const handleButtonClick = () => {
    alert('Please Select the Show timings and seats!!');
  }

  return (
    <div className="movieparent">
      <Childmovie movies={movies} handleClick={handleButtonClick} />
    </div>
  );
}

export default Movies;
