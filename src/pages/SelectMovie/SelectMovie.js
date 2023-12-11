import React from "react";
import './SelectMovie.css'

const SelectMovie = ({ slectbook }) => {
  // id: movie.id,
  // title: movie.title,
  // original_language: movie.original_language,
  // backdrop_path: movie.backdrop_path,
  // overview: movie.overview,
  // release_date: movie.release_date,
  // popularity: movie.popularity,
  return (
    <div className="SelectMovie-body">
      {slectbook.map((mov) => (
        <div className="SelectMovie-display">
          <div className="SelectMovie-display-left">
            <div>{mov.title}</div>
            <div>{mov.original_language}</div>
            <div>{mov.overview}</div>
            <div>{mov.release_date}</div>
            <div>{mov.popularity.toFixed(1)}K</div>
          </div>
          <div className="SelectMovie-display-right">
            <img
              src={`https://image.tmdb.org/t/p/w1280${mov.backdrop_path}`}
              alt="img_banner"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectMovie;
