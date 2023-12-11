import React, { useContext } from "react";
import "./Latest_Movies.css";
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom";

const Latest_Movies = ({ setslectbook }) => {
  const { LatestMovies } = useContext(MovieContext);

  // console.log(LatestMovies[0].title);

  return (
    <div>
      <div>
          <div id="carouselExampleIndicators" className="carousel slide"  data-bs-interval="1000">
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
                <img
                  src={`https://image.tmdb.org/t/p/w1280${LatestMovies[3].backdrop_path}`}
                  className="d-block w-100 carousel-bnner-img "
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={`https://image.tmdb.org/t/p/w1280${LatestMovies[5].backdrop_path}`}
                  className="d-block w-100 carousel-bnner-img "
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={`https://image.tmdb.org/t/p/w1280${LatestMovies[9].backdrop_path}`}
                  className="d-block w-100 carousel-bnner-img "
                  alt="..."
                />
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
        <h1>Latest Movies</h1>
        <div className="row">
          {LatestMovies.map((movie) => (
              
            <div className="col-lg-3 col-sm-6 col-md-4 mt-4">
              <div className="" key={movie.id}>
                <div className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                    className="moive-img"
                    alt="..."
                  />
                  <div className="card-body" id="alter-card-body">
                    {/* Movie Title */}
                    <h5 className="card-title" id="alter-card-title">
                      {movie.title}
                    </h5>
                    <p className="card-text">
                      Language: {movie.original_language}
                    </p>
                    <p>
                      Ratine: <strong>{movie.vote_average}</strong>
                    </p>
                    <p className="h5">Rs: 180/ per seat</p>

                    {/* Booking button */}
                    <Link to="selctbooking">
                      <button
                        className="btn btn-danger book-btn"
                        onClick={() =>
                          setslectbook([
                            {
                              id: movie.id,
                              title: movie.title,
                              original_language: movie.original_language,
                              backdrop_path: movie.backdrop_path,
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
