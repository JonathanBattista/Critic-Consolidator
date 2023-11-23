import "./Homepagehero.scss";
import { Link } from "react-router-dom";
import map from "../../assets/images/Google-Map-SEO.jpg";

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
        <img class="homepage__local-image" src={map} alt="Map Image"></img>
        <p class="homepage__local-text">Feature coming soon!</p>
      </div>
    </section>
  );
};

export { HomePageHero };
