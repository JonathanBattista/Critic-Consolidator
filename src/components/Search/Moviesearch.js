import { useState, useEffect } from "react";
import "./Moviesearch.scss";
import { Link } from "react-router-dom";

const Moviesearch = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/week?api_key=ae11f413d64f75494a49b4bb48a150a6"
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="moviesearch">
      <div className="moviesearch__input-container">
        <h2 className="moviesearch__input-header">Search Movie Library</h2>
        <input
          className="moviesearch__input"
          type="text"
          placeholder="Search"
        />
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
