import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieSearch = ({ search, setslectbook }) => {
  const [MovieSearch, setMovieSearch] = useState([]);
  // const [serchitem,setserchitem]=useState('')

  useEffect(() => {
    getMovies();
  }, [search]);
  async function getMovies() {
    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=%22${search}%22`;
    const response = await fetch(API_URL);
    const responseJson = await response.json();
    setMovieSearch(responseJson.results);
  }

  return (
    <div>
      <div className="LatestMovies-body">
        {/* <form onSubmit={(e)=>(e.preventDefault())}>
    <input value={serchitem} onChange={(e)=>setserchitem(e.target.value)} type="text"/>
</form>  */}
        {/* onChange={(e)=>setSearching(e.target.value)} */}
        {search ? <h1>Your Search</h1> : null}
        <div className="row">
          {MovieSearch.map((movie) => (
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

export default MovieSearch;
