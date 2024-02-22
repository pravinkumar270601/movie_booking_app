import { useState } from "react";
import "./App.css";
import MovieSearch from "./Commponents/movieSearch/MovieSearch";
import Latest_Movies from "./pages/Latest_Movies/Latest_Movies";
import { RiMovie2Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import SelectMovie from "./pages/SelectMovie/SelectMovie";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import TicketBooked from "./pages/TicketBooked/TicketBooked";
import logo from "./image/movie_logo.png";
import ScrollToTop from "./pages/ScrollToTop/ScrollToTop";

function App() {
  const [search, setsearch] = useState("  ");
  const [slectbook, setslectbook] = useState([]);
  const [Getseats, setGetseats] = useState([]);

  console.log(slectbook);
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <nav>
          <div className="nav-div">
            <div className="logo-div">
             <Link to="/"> <img className="my-logo" src={logo} /></Link>
              {/* <RiMovie2Line /> */}
            </div>
            <div className="form-div">
              <form
                className=""
                role="search"
                onSubmit={(e) => e.preventDefault()}
              >
                <Link to="/">
                  <input
                    className="input-search"
                    placeholder=" Search movies"
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                    type="text"
                    required
                  />

                  <FaSearch type="submit" className="search-btn-nav" />
                </Link>
              </form>
            </div>
          </div>
        </nav>

        <Routes>
          {/* <Route path="/" element={<LoginForm />} /> */}
          <Route
            path="/"
            element={[
              <MovieSearch search={search} setslectbook={setslectbook} />,
              <Latest_Movies
                slectbook={slectbook}
                setslectbook={setslectbook}
              />,
            ]}
          />
          <Route
            path="/selctbooking"
            element={
              <SelectMovie slectbook={slectbook} setGetseats={setGetseats} />
            }
          />

          <Route
            path="/ticketbooked"
            element={<TicketBooked Getseats={Getseats} slectbook={slectbook} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
