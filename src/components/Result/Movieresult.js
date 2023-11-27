import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Movieresult.scss";
import { Reviewdata } from "../Data/Reviewdata";

const Movieresult = () => {
  const { id } = useParams();
  const [movieresult, setMovieresult] = useState(null);

  useEffect(() => {
    const fetchMovieresult = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=ae11f413d64f75494a49b4bb48a150a6`
        );
        const data = await response.json();
        setMovieresult(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching movie result:", error);
      }
    };

    fetchMovieresult();
  }, [id]);

  if (!movieresult) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movieresult">
      <div className="movieresult__movie">
        <h2 className="movieresult__header">{movieresult.title}</h2>
        <img
          className="movieresult__image"
          src={`https://image.tmdb.org/t/p/w500${movieresult.poster_path}`}
          alt={movieresult.title}
        />
        <p className="movieresult__text">{movieresult.overview}</p>
      </div>
      <div>
        <Reviewdata />
      </div>
    </div>
  );
};

export { Movieresult };
