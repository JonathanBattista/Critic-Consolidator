import { Link } from "react-router-dom";
import "./Footer.scss";
import copyRight from "../../assets/Icons/copyright.png";
import logo from "../../assets/Logo/logo-black.png";

const Footercopyright = () => {
  return (
    <div className="footer__copyright-container">
      <div>
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
      <div className="footer__logo-container">
        <Link to="/">
          <img className="footer__logo" src={logo} alt="Logo"></img>
        </Link>
      </div>
    </div>
  );
};

export { Footercopyright };
