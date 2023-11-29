import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Moviesearchresult.scss";
import { SearchBar } from "../Searchbar/Moviesearchbar";

const Moviesearchresult = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=ae11f413d64f75494a49b4bb48a150a6`
      );
      const data = await response.json();
      setMovies(data.results);
      navigate("/movies/search", { state: { searchResults: data.results } });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="moviesearchresult">
      <div className="moviesearch__input-container">
        <h2 className="moviesearch__input-header">Search Movie Library</h2>
        <form className="moviesearch__form" onSubmit={handleSearchSubmit}>
          <input
            className="moviesearch__input"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button className="moviesearch__button" type="submit">
            Search
          </button>
        </form>
      </div>
      <h2 className="moviesearchresult__header">Search Results</h2>
      <div className="moviesearchresult__map">
        {searchResults.map((movie) => (
          <div key={movie.id}>
            <Link
              className="moviesearchresult__movie"
              to={`/movies/${movie.id}`}>
              <img
                className="moviesearchresult__image"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3 className="moviesearchresult__movie-title">{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Moviesearchresult };
