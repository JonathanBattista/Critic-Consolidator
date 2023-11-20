import React from "react";
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
        <Link to="/Movies" className="header-link">
          Movie Page
        </Link>
        <Link to="/Games" className="header-link">
          Games Page
        </Link>
        <Link to="/Local" className="header-link">
          Local Page
        </Link>
      </div>
    </div>
  );
};

export { Header };
