import React from "react";

const GamesFooter = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__personal">
          <h3 className="footer__headers">PERSONAL</h3>
          <img
            className="footer__image"
            src=""
            alt="An awesome picture of me"
          />
          <p className="footer__bio">Bio</p>
        </div>
        <div>
          <a
            className="footer__links"
            href="https://www.linkedin.com/in/jonathan-battista/"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </a>
          <a
            className="footer__links"
            href="https://github.com/JonathanBattista"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div className="footer__resources">
          <h3 className="footer__headers">RESOURCES</h3>
          <a
            className="footer__links"
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer">
            Google
          </a>
          <a
            className="footer__links"
            href="https://www.ign.com/"
            target="_blank"
            rel="noopener noreferrer">
            IGN
          </a>
          <a
            className="footer__links"
            href="https://www.gamespot.com/"
            target="_blank"
            rel="noopener noreferrer">
            GameSpot
          </a>
          <a
            className="footer__links"
            href="https://www.polygon.com/"
            target="_blank"
            rel="noopener noreferrer">
            Polygon
          </a>
        </div>
      </div>
    </footer>
  );
};

export { GamesFooter };
