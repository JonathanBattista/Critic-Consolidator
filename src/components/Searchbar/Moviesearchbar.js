import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Search/Moviesearch.scss";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    navigate("/movies/search");
  };

  return (
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
  );
};

export { SearchBar };
