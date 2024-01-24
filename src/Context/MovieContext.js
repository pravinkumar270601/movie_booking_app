import { createContext, useEffect, useState } from "react";



export const MovieContext =createContext(null)

const MovieContextprovider =(props)=>{
    const [LatestMovies, setLatestMovies] = useState([]);
    useEffect(() => {
      getMovies();
    }, []);
    async function getMovies() {
      try{
      const API_URL =
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
      const response = await fetch(API_URL);
      const responseJson = await response.json();
      setLatestMovies(responseJson.results);
      }catch(err){
        console.log(err,"DATA NOT FETHING")
      }
    }

    return(
        <MovieContext.Provider value={{LatestMovies}}>
            {props.children}

        </MovieContext.Provider>
        
    )

}

export default MovieContextprovider;