import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h2>{movieresult.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieresult.poster_path}`}
        alt={movieresult.title}
      />
      <p>{movieresult.overview}</p>
    </div>
  );
};

export { Movieresult };
