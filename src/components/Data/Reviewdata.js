import { useState } from "react";
import star1 from "../../assets/Icons/Star_rating_1_of_5.png";
import star2 from "../../assets/Icons/Star_rating_2_of_5.png";
import star3 from "../../assets/Icons/Star_rating_3_of_5.png";
import star4 from "../../assets/Icons/Star_rating_4_of_5.png";
import star5 from "../../assets/Icons/Star_rating_5_of_5.png";

const Reviewdata = () => {
  const [selectedStars, setSelectedStars] = useState(5);
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
      site: "Metacritic",
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
      site: "Metacritic",
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
      site: "Metacritic",
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
      site: "Metacritic",
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
      site: "Metacritic",
      review:
        "A film that not only falls flat but also manages to scrape the bottom of the barrel. Incoherent storytelling, wooden acting, and a complete lack of direction make this movie an absolute travesty. Do yourself a favor and choose literally anything else for your movie night.",
      stars: 1,
    },
  ];

  const starImages = {
    1: star1,
    2: star2,
    3: star3,
    4: star4,
    5: star5,
  };

  const handleStarClick = (stars) => {
    setSelectedStars(stars);
  };
  const handleStarChange = (e) => {
    setSelectedStars(Number(e.target.value));
  };

  return (
    <div>
      <select
        value={selectedStars}
        onChange={handleStarChange}
        style={{ marginBottom: "10px" }}>
        {[5, 4, 3, 2, 1].map((stars) => (
          <option key={stars} value={stars}>
            {Array.from({ length: stars }, (_, index) => (
              <img key={index} src={starImages[stars]} alt={`${stars} stars`} />
            ))}
          </option>
        ))}
      </select>

      <div>
        {[5, 4, 3, 2, 1].map((stars) => (
          <img
            key={stars}
            src={starImages[stars]}
            alt={`${stars} stars`}
            onClick={() => setSelectedStars(stars)}
            style={{
              cursor: "pointer",
              opacity: stars === selectedStars ? 1 : 0.5,
            }}
          />
        ))}
      </div>

      {reviewsData
        .filter((review) => review.stars === selectedStars)
        .map((review, index) => (
          <div key={index}>
            <div>
              <div>{review.date}</div>
              <img
                src={`../../assets/Logo/${review.site.toLowerCase()}-logo.png`}
                alt={review.site}
              />
            </div>
            <div>{review.review}</div>
          </div>
        ))}
    </div>
  );
};

export { Reviewdata };
