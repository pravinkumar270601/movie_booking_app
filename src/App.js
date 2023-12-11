import { useState } from "react";
import "./App.css";
import MovieSearch from "./Commponents/movieSearch/MovieSearch";
import Latest_Movies from "./pages/Latest_Movies/Latest_Movies";
import { RiMovie2Line } from "react-icons/ri";
import SelectMovie from "./pages/SelectMovie/SelectMovie";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

function App() {
  const [search, setsearch] = useState("");
  const [slectbook, setslectbook] = useState([]);
  console.log(slectbook)
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand"><RiMovie2Line/></a>
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
             <Link to="/">
              <input
                className="form-control me-2"
                // type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
                type="text"
              /></Link>
            </form>
          </div>
        </nav>
      </nav>
      <Routes>
      <Route path="/" element={[<MovieSearch search={search} setslectbook={setslectbook} />,<Latest_Movies slectbook={slectbook} setslectbook={setslectbook}/>]} />
      
      <Route path="/selctbooking" element={<SelectMovie slectbook={slectbook} /> }/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
