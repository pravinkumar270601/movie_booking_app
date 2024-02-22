import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const MovieSearch = ({ search, setslectbook }) => {
  const [MovieSearch, setMovieSearch] = useState([]);
  // const [serchitem,setserchitem]=useState('')

  useEffect(() => {
    getMovies();
  },[search]);
  async function getMovies() {
    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=%22${search}%22`;
    const response = await fetch(API_URL);
    const responseJson = await response.json();
    setMovieSearch(responseJson.results);
  }
  console.log(MovieSearch,"MovieSearch")

  return (
    <div>
      <div className="LatestMovies-body">
        {/* <form onSubmit={(e)=>(e.preventDefault())}>
    <input value={serchitem} onChange={(e)=>setserchitem(e.target.value)} type="text"/>
</form>  */}
        {/* onChange={(e)=>setSearching(e.target.value)} */}
        {search==="  " ? null : search!=="  " ? <h1 className="your-search-h1">Your Search</h1>:null}
        <div className="row search-row">
          {MovieSearch.map((movie) => (
            <div className="col-lg-3 col-sm-6 col-md-4 mt-4">
              <div className="" key={movie.id}>
                <div className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                    className="moive-img"
                    alt={`${movie.title}`}
                  />
                  <div className="card-body" id="alter-card-body">
                    {/* Movie Title */}
                    {movie.adult?<div className="adult-movie">18+</div>:null}
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

                    {/* Booking button */}
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
                              poster_path:movie.poster_path,
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

export default MovieSearch;
