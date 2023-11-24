import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/Logo/logo-white.png";
import downarrow from "../../assets/images/dropdown.png";
import uparrow from "../../assets/images/uparrow.png";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header">
      <div className="header__logo-container">
        <Link to="/" className="header__logo">
          <img
            className="header__logo-image"
            src={logo}
            alt="Critic Consolidator Logo"
          />
          <h2 className="header__title">Critic Consolidator</h2>
        </Link>
      </div>
      <div className="header__nav">
        <Link to="/movies" className="header__nav-link">
          Movies
        </Link>
        <Link to="/games" className="header__nav-link">
          Games
        </Link>
        <Link to="/books" className="header__nav-link">
          Books
        </Link>
        <Link to="/local" className="header__nav-link">
          Local
        </Link>
      </div>
      <div>
        <div
          className={`header__mobile-menu ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}>
          Review Categories
          <img
            className="header__mobile-image"
            src={isMobileMenuOpen ? uparrow : downarrow}
            alt="dropdown"></img>
        </div>
        {isMobileMenuOpen && (
          <div className="header__mobile-dropdown">
            <Link to="/movies" className="header__nav-dropdown">
              Movies
            </Link>
            <Link to="/games" className="header__nav-dropdown">
              Games
            </Link>
            <Link to="/books" className="header__nav-dropdown">
              Books
            </Link>
            <Link to="/local" className="header__nav-dropdown">
              Local
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export { Header };
