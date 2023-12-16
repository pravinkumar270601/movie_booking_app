import React, { useState } from "react";
import "./SelectMovie.css";
import { Link, useNavigate } from "react-router-dom";

const SelectMovie = ({ slectbook, setGetseats }) => {
  // State to manage movie sets with checkbox information
  const [movieSets, setMovieSets] = useState(() =>
    Array.from({ length: 120 }, (_, index) => ({
      id: index + 1,
      seatnum: `${index + 1}`,
      checked: false, // Initially, all checkboxes are unchecked
    }))
  );

  // Function to handle checkbox change
  const handleCheckboxChange = (setId) => {
    setMovieSets((prevMovieSets) =>
      prevMovieSets.map((movieSet) =>
        movieSet.id === setId
          ? { ...movieSet, checked: !movieSet.checked }
          : movieSet
      )
    );
  };
  const Navgate = useNavigate();
  const Handleseat = () => {
    // movieSets.filter((movieSet) => movieSet.checked);
    setGetseats(movieSets.filter((movieSet) => movieSet.checked));
    if (movieSets.filter((movieSet) => movieSet.checked).length > 0) {
      Navgate("/ticketbooked");
    } else {
      alert("Please Select Your Seat");
    }
  };

  // const myseatselct =
  // console.log(myseatselct,"0101010100110010101010")

  return (
    <div className="SelectMovie-body">
      {slectbook.map((mov) => (
        <div>
          <div className="SelectMovie-display">
            <div className="SelectMovie-display-left">
              <div className="SelectMovie-qus-div">
                <span className="SelectMovie-qus"> Movie Name :</span>
                <span className="SelectMovie-title-span"> {mov.title}</span>
              </div>
              <div className="SelectMovie-qus-div">
                <span className="SelectMovie-qus">Original Language :</span>
                <span className="SelectMovie-language-span">
                  &nbsp; {mov.original_language}
                </span>
              </div>
              <div className="SelectMovie-qus-div">
                <span className="SelectMovie-qus"> Describtion :</span>{" "}
                <span className="SelectMovie-overview-span">
                  {" "}
                  &nbsp;{mov.overview}
                </span>
              </div>
              <div className="SelectMovie-qus-div">
                <span className="SelectMovie-qus"> Release Date :</span>{" "}
                <span className="SelectMovie-releasedate-span">
                  {" "}
                  {mov.release_date}
                </span>
              </div>
              <div className="SelectMovie-qus-div">
                <span className="SelectMovie-qus"> Popularity :</span>{" "}
                <span className="SelectMovie-popularity-span">
                  {" "}
                  {mov.popularity.toFixed(1)}K
                </span>
              </div>
            </div>
            <div className="SelectMovie-display-right">
              <img
                src={`https://image.tmdb.org/t/p/w1280${mov.backdrop_path}`}
                alt="img_banner"
                className="SelectMovie-banner-display"
              />
            </div>
          </div>
          <div>
            <hr />
            <h2 className="movieSets-heading">Select Your Seats</h2>
            <div className="container">
              <div className="row movieSets-row mt-3">
                {movieSets.map((movieSet, index) => (
                  <div className="col-lg-1 col-md-1 col-sm-2 ">
                    <div className="movieSets-div" key={movieSet.id}>
                      <input
                        type="checkbox"
                        className="movieSets-checkbox"
                        id={`checkbox-${movieSet.id}`}
                        checked={movieSet.checked}
                        onChange={() => handleCheckboxChange(movieSet.id)}
                      />
                      <label
                        htmlFor={`checkbox-${movieSet.id}`}
                        className="movieSets-label"
                      >
                        {movieSet.seatnum}
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={Handleseat}
                className="btn btn-danger movieSets-btn"
              >
                Conform Your Ticket
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectMovie;
