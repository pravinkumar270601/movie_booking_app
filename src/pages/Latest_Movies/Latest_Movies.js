import React, { useContext } from "react";
import "./Latest_Movies.css";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Latest_Movies = ({ setslectbook }) => {
  const { LatestMovies } = useContext(MovieContext);
  console.log(LatestMovies, "LatestMovies");

  return (
    <div>
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-interval="1000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {LatestMovies.map((movie, intd) => {
                if (intd === 1) {
                  return (
                    <img
                      src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                      className="d-block w-100 carousel-bnner-img "
                      alt="..."
                    />
                  );
                }
              })}
            </div>
            <div className="carousel-item">
              {LatestMovies.map((movie, intd) => {
                if (intd === 4) {
                  return (
                    <img
                      src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                      className="d-block w-100 carousel-bnner-img "
                      alt="..."
                    />
                  );
                }
              })}
            </div>
            <div className="carousel-item">
              {LatestMovies.map((movie, intd) => {
                if (intd === 2) {
                  return (
                    <img
                      src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                      className="d-block w-100 carousel-bnner-img "
                      alt="..."
                    />
                  );
                }
              })}
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="LatestMovies-body">
        <h1 className="LatestMovies-heading">Latest Movies</h1>
        <div className="row LatestMovies-row ">
          {LatestMovies.map((movie) => (
            <div className="col-lg-3 col-sm-6 col-md-4 mt-4">
              <div className="" key={movie.id}>
                <div className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                    className="moive-img"
                    alt={`${movie.title}`}
                  />
                  {movie.adult ? <div className="adult-movie">18+</div> : null}
                  <div className="card-body" id="alter-card-body">
                    <div className="card-text">
                      <span className="card-qus"> Language: </span>{" "}
                      <span className="card-language">
                        {movie.original_language}
                      </span>
                    </div>
                    <div>
                      <span className="card-qus"> Rating: </span>
                      <span>
                        <FaStar className="FaStar-star" />
                      </span>
                      <span className="card-rating">
                        {movie.vote_average.toFixed(1)}/10
                      </span>
                    </div>
                    <div className="card-seat">
                      <span className="card-qus">Rs: </span>180/ per seat
                    </div>

                    <Link to="/selctbooking">
                      <button
                        className="btn btn-danger book-btn"
                        onClick={() =>
                          setslectbook([
                            {
                              id: movie.id,
                              title: movie.title,
                              original_language: movie.original_language,
                              backdrop_path: movie.backdrop_path,
                              poster_path: movie.poster_path,
                              overview: movie.overview,
                              release_date: movie.release_date,
                              popularity: movie.popularity,
                            },
                          ])
                        }
                      >
                        Book Ticket
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest_Movies;
