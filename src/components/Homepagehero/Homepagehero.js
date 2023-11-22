import "./Homepagehero.scss";
import { Link } from "react-router-dom";

const HomePageHero = () => {
  return (
    <section className="homepage__hero-container">
      <div className="homepage__hero">
        <div className="homepage__hero-card homepage__hero-card--movies">
          <h2>Movies</h2>
        </div>
        <div className="homepage__hero-card homepage__hero-card--games">
          <h2>Games</h2>
        </div>
        <div className="homepage__hero-card homepage__hero-card--books">
          <h2>Books</h2>
        </div>
      </div>
      <div class="homepage__local">
        <h2 class="homepage__local-header">Local Search</h2>
        <img class="homepage__local-image" src="" alt="Hero Image"></img>
        <p class="homepage__local-text">Feature coming soon!</p>
      </div>
    </section>
  );
};

export { HomePageHero };
