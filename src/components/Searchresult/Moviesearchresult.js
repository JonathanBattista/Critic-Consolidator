import { Link, useLocation } from "react-router-dom";
import "./Moviesearchresult.scss";

const Moviesearchresult = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <div className="moviesearchresult">
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
