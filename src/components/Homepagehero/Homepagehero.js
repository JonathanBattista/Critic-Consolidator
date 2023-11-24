import "./Homepagehero.scss";
import { Link } from "react-router-dom";
import map from "../../assets/images/map.png";

const HomePageHero = () => {
  return (
    <section className="homepage__hero-container">
      <h2 className="homepage__hero-header">Review Categories</h2>
      <div className="homepage__hero">
        <div className="homepage__hero__card-container">
          <h2 className="homepage__hero__card-header">Movies</h2>
          <Link to="/movies">
            <div className="homepage__hero__card homepage__hero__card--movies"></div>
          </Link>
        </div>
        <div className="homepage__hero__card-container">
          <h2 className="homepage__hero__card-header">Games</h2>
          <Link to="/games">
            <div className="homepage__hero__card homepage__hero__card--games"></div>
          </Link>
        </div>
        <div className="homepage__hero__card-container">
          <h2 className="homepage__hero__card-header">Books</h2>
          <Link to="/books">
            <div className="homepage__hero__card homepage__hero__card--books"></div>
          </Link>
        </div>
      </div>
      <div class="homepage__local">
        <h2 class="homepage__local-header">Local Search</h2>
        <div class="homepage__local__image-container">
          <input
            className="homepage__local__search"
            type="text"
            placeholder="Search"
          />
          <img class="homepage__local__image" src={map} alt="Map"></img>
        </div>
        <div class="homepage__local__text-container">
          <h2 class="homepage__local__text-header">Feature coming soon!</h2>
          <p class="homepage__local__text">
            My goal is to update this site regualry in the future and one of the
            biggest improvements would be to have a working geo-location search
            field. This would allow for quick and easy review searches on local
            busniesses and places.
          </p>
        </div>
      </div>
    </section>
  );
};

export { HomePageHero };
