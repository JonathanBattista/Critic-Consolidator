import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import google from "../../assets/Logo/google-logo.png";
import imdb from "../../assets/Logo/imdb-logo.png";
import rottentomato from "../../assets/Logo/rottentomatoes-logo.png";
import logo from "../../assets/Logo/white-logo-right.png";
import "./Reviewdata.scss";

const Reviewdata = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [imdbAverage, setImdbAverage] = useState(null);
  const [rottenTomatoesAverage, setRottenTomatoesAverage] = useState(null);
  const [googleAverage, setGoogleAverage] = useState(null);
  const [overallAverage, setOverallAverage] = useState(null);

  const reviewGrade = [
    {
      site: "IMDb",
      grade: 6.9,
      scale: 10,
    },
    {
      site: "Rotten Tomatoes",
      grade: 76,
      scale: 100,
    },
    {
      site: "Google",
      grade: 4.3,
      scale: 5,
    },
  ];

  const reviewsData = [
    {
      date: "2023-01-01",
      site: "IMDb",
      review:
        "A cinematic masterpiece that seamlessly blends gripping storytelling with mesmerizing visuals. This film is a true work of art, leaving audiences on the edge of their seats from start to finish. A must-see that transcends genres and captivates the imagination.",
      stars: 5,
    },
    {
      date: "2023-01-01",
      site: "Rotten Tomatoes",
      review:
        "Exceptional in every aspect, this movie delivers an unforgettable experience. The performances are stellar, the direction is flawless, and the soundtrack elevates the emotions to new heights. A true gem that will resonate with viewers long after the credits roll.",
      stars: 5,
    },
    {
      date: "2023-01-01",
      site: "Google",
      review:
        "A five-star triumph that sets a new standard for excellence in filmmaking. From the opening scene to the final frame, this movie is a rollercoaster of emotions, expertly crafted with precision and care. A true testament to the power of storytelling in the world of cinema.",
      stars: 5,
    },
    {
      date: "2023-01-01",
      site: "IMDb",
      review:
        "An engaging and well-executed film that offers a compelling storyline and solid performances. While it may not quite reach the heights of perfection, it still stands head and shoulders above many in its genre. A thoroughly enjoyable experience that keeps you invested throughout.",
      stars: 4,
    },
    {
      date: "2023-01-02",
      site: "Rotten Tomatoes",
      review:
        "Impressive in its own right, this movie boasts strong character development and a unique narrative. While it doesn't quite hit the pinnacle of a perfect score, it's undeniably a commendable effort. A film that showcases the talent of its cast and crew, leaving audiences with a satisfying cinematic experience.",
      stars: 4,
    },
    {
      date: "2023-01-03",
      site: "Google",
      review:
        "A solid addition to the cinematic landscape, this movie brings together a commendable cast and a thought-provoking plot. While it may have a few minor imperfections, they are easily overlooked in the grand scheme of its overall quality. A strong recommendation for those seeking a well-crafted and engaging film.",
      stars: 4,
    },
    {
      date: "2023-01-01",
      site: "IMDb",
      review:
        "A movie that falls squarely in the middle ground, offering moments of intrigue and entertainment, but also grappling with some noticeable shortcomings. While it may not stand out as a top-tier film, it manages to deliver an average viewing experience that might appeal to those seeking a casual watch.",
      stars: 3,
    },
    {
      date: "2023-01-02",
      site: "Rotten Tomatoes",
      review:
        "This film presents an interesting premise and competent execution, but unfortunately, it struggles to rise above mediocrity. With moments of brilliance offset by moments of inconsistency, it lands firmly in the middle of the cinematic spectrum. An okay choice for a movie night, but don't expect it to leave a lasting impact.",
      stars: 3,
    },
    {
      date: "2023-01-03",
      site: "Google",
      review:
        "A mixed bag of cinematic elements, this movie has its highs and lows. While it offers some commendable aspects, it also grapples with certain issues that hinder its overall impact. It's a film that might resonate with some viewers, but its flaws prevent it from reaching the heights of a truly memorable experience.",
      stars: 3,
    },
    {
      date: "2023-01-01",
      site: "IMDb",
      review:
        "A lackluster film that struggles to find its footing, marred by inconsistent pacing and a narrative that fails to fully engage. Despite a commendable effort from the cast, the movie falls short of delivering a compelling experience. Not recommended for those seeking a more captivating cinematic journey.",
      stars: 2,
    },
    {
      date: "2023-01-02",
      site: "Rotten Tomatoes",
      review:
        "This movie unfortunately disappoints on multiple fronts. A thin plot, coupled with subpar performances, makes for a forgettable viewing experience. While it may have had potential, it ultimately fails to live up to expectations, leaving audiences with a sense of unfulfilled promise.",
      stars: 2,
    },
    {
      date: "2023-01-03",
      site: "Google",
      review:
        "Two stars for effort, but this film misses the mark. A confusing plotline, coupled with lackluster character development, leaves viewers questioning the overall direction. Despite a few redeeming moments, it struggles to justify its place among more noteworthy cinematic offerings. Approach with caution.",
      stars: 2,
    },
    {
      date: "2023-01-01",
      site: "IMDb",
      review:
        "A cinematic disaster that fails on nearly every front. From a convoluted plot to cringe-worthy performances, this movie is a painful experience from start to finish. Save yourself the agony and steer clear of this cinematic catastrophe.",
      stars: 1,
    },
    {
      date: "2023-01-02",
      site: "Rotten Tomatoes",
      review:
        "One star is generous for this abysmal excuse for a film. Poorly conceived, poorly executed—this movie is a prime example of everything that can go wrong in filmmaking. A waste of time and resources, it's hard to find anything redeeming about this cinematic failure.",
      stars: 1,
    },
    {
      date: "2023-01-03",
      site: "Google",
      review:
        "A film that not only falls flat but also manages to scrape the bottom of the barrel. Incoherent storytelling, wooden acting, and a complete lack of direction make this movie an absolute travesty. Do yourself a favor and choose literally anything else for your movie night.",
      stars: 1,
    },
  ];

  useEffect(() => {
    const imdbTotal = reviewGrade
      .filter((review) => review.site === "IMDb" && review.grade !== undefined)
      .reduce((acc, review) => acc + (review.grade / review.scale) * 100, 0);
    const imdbCount = reviewGrade.filter(
      (review) => review.site === "IMDb" && review.grade !== undefined
    ).length;
    setImdbAverage(imdbTotal / imdbCount);

    const rottenTomatoesTotal = reviewGrade
      .filter(
        (review) =>
          review.site === "Rotten Tomatoes" && review.grade !== undefined
      )
      .reduce((acc, review) => acc + (review.grade / review.scale) * 100, 0);
    const rottenTomatoesCount = reviewGrade.filter(
      (review) =>
        review.site === "Rotten Tomatoes" && review.grade !== undefined
    ).length;
    setRottenTomatoesAverage(rottenTomatoesTotal / rottenTomatoesCount);

    const googleTotal = reviewGrade
      .filter(
        (review) => review.site === "Google" && review.grade !== undefined
      )
      .reduce((acc, review) => acc + (review.grade / review.scale) * 100, 0);
    const googleCount = reviewGrade.filter(
      (review) => review.site === "Google" && review.grade !== undefined
    ).length;
    setGoogleAverage(googleTotal / googleCount);

    const overallTotal = imdbTotal + rottenTomatoesTotal + googleTotal;
    const overallCount = imdbCount + rottenTomatoesCount + googleCount;
    setOverallAverage(overallTotal / overallCount);
  }, [reviewGrade]);

  const filteredReviews = reviewsData.filter(
    (review) => review.stars === rating
  );

  return (
    <div className="review">
      <div className="review__score">
        <h2 className="review__score-header">Consolidated Score</h2>
        <div className="review__score-bottom">
          <img className="review__score-logo" src={logo}></img>
          {overallAverage && (
            <p className="review__score-total">{Math.round(overallAverage)}%</p>
          )}
        </div>
      </div>
      <div className="review__stars">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className="review__star"
                size={50}
                color={
                  currentRating <= (hover || rating) ? "#FFC107" : "#E4E5E9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <div className="filtered-reviews">
        {rating && (
          <div className="filtered-reviews__container">
            <h2 className="filtered-reviews__header">
              Reviews with {rating} stars:
            </h2>
            <div className="filtered-reviews__tablet">
              {filteredReviews.map((review, index) => (
                <div className="filtered-reviews__main" key={index}>
                  <p className="filtered-reviews__text">{review.review}</p>
                  <p className="filtered-reviews__date">
                    {review.date}{" "}
                    {review.site === "IMDb" && (
                      <img
                        className="filtered-reviews__imdb"
                        src={imdb}
                        alt="IMDb Logo"
                      />
                    )}
                    {review.site === "Rotten Tomatoes" && (
                      <img
                        className="filtered-reviews__tomato"
                        src={rottentomato}
                        alt="Rotten Tomatoes Logo"
                      />
                    )}
                    {review.site === "Google" && (
                      <img
                        className="filtered-reviews__google"
                        src={google}
                        alt="Google Logo"
                      />
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Reviewdata };
