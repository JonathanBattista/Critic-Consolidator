import "./Footer.scss";

const Footer = () => {
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
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer">
            Facebook
          </a>
          <a
            className="footer__links"
            href="https://www.yelp.com/"
            target="_blank"
            rel="noopener noreferrer">
            Yelp
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
