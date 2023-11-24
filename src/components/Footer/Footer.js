import "./Footer.scss";
import myPicture from "../../assets/images/self-picture.jpg";
import linkedIn from "../../assets/Logo/LI-Logo.png";
import gitHub from "../../assets/Logo/github-mark-white.svg";
import google from "../../assets/Logo/google-logo.png";
import facebook from "../../assets/Logo/facebook.png";
import yelp from "../../assets/Logo/yelp_logo_dark_bg.png";
import copyRight from "../../assets/Icons/copyright.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__personal">
          <h3 className="footer__header-personal">PERSONAL</h3>
          <div className="footer__bio-container">
            <img className="footer__image" src={myPicture} alt="ME" />
            <p className="footer__bio">
              Hi, I'm Jonathan Battista, and this is where I showcase the skills
              I've mastered at BrainStation. From web development to design,
              each project reflects my commitment to excellence and staying
              ahead in the industry. Let's explore the intersection of
              technology and design together—thanks for visiting!
            </p>
          </div>
          <div>
            <ul className="footer__link-list">
              <li>
                <a
                  className="footer__links"
                  href="https://www.linkedin.com/in/jonathan-battista/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    className="footer__link-images"
                    src={linkedIn}
                    alt="LinkedIn"></img>
                </a>
              </li>
              <li>
                <a
                  className="footer__links"
                  href="https://github.com/JonathanBattista"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    className="footer__link-images"
                    src={gitHub}
                    alt="GitHub"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__resources">
          <h3 className="footer__header-resources">RESOURCES</h3>
          <ul className="footer__link-list">
            <li>
              <a
                className="footer__links"
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="footer__link-images"
                  src={google}
                  alt="Google"></img>
              </a>
            </li>
            <li>
              <a
                className="footer__links"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="footer__link-images"
                  src={facebook}
                  alt="Facebook"></img>
              </a>
            </li>
            <li>
              <a
                className="footer__links"
                href="https://www.yelp.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  className="footer__link-images"
                  src={yelp}
                  alt="Yelp"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright-container">
        <p className="footer__copyright-message">
          Please do not sell or share my personal information without
          permission.
        </p>
        <p className="footer__copyright-message">
          <img
            className="footer__copyright-image"
            src={copyRight}
            alt="CC"></img>
          2023 Critic Consolidator Group. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export { Footer };
