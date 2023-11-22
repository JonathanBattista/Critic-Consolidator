import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Link to="/" className="header-logo">
          <img src="" alt="Critic Consolidator Logo" />
          <h2>Critic Consolidator</h2>
        </Link>
      </div>
      <div className="header-links">
        <Link to="/movies" className="header-link">
          Movies
        </Link>
        <Link to="/games" className="header-link">
          Games
        </Link>
        <Link to="/books" className="header-link">
          Books
        </Link>
        <Link to="/local" className="header-link">
          Local
        </Link>
      </div>
    </div>
  );
};

export { Header };
