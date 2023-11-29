import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchBar } from "../Searchbar/Moviesearchbar";
import "./Moviesearch.scss";

const Moviesearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=ae11f413d64f75494a49b4bb48a150a6`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
    <div className="moviesearch">
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
      <div className="moviesearch__trending">
        <h2 className="moviesearch__header">Trending this week</h2>
        <div className="moviesearch__trending-map">
          {movies.map((movie) => (
            <div className="moviesearch__movie" key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3 className="moviesearch__movie-title">{movie.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Moviesearch };
