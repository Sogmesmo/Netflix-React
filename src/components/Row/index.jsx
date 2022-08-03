import React, { useEffect } from "react";
<<<<<<< Updated upstream
import { getMovies } from "../../Api";
import "./styles.css";
=======
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

import "./styles.css";
import { getMovies } from "../../Api";
>>>>>>> Stashed changes

const imageHost = "https://image.tmdb.org/t/p/original/";
function Row({ title, path, isLarge }) {
  const [movies, setMovies] = React.useState([]);
<<<<<<< Updated upstream
=======
  const [trailerUrl, setTrailerUrl] = React.useState("");
  const handleOnClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.title || movie.name || movie.original_name || "")
        .then((url) => {
          setTrailerUrl(url);
        })
        .catch((error) => {
          console.log("Error fetching movie trailer: ", error);
        });
    }
  };
>>>>>>> Stashed changes

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      console.log("data ", data);
      setMovies(data?.results);
    } catch (error) {
      console.log("fetchMovies error: ", error);
    }
  };

  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  return (
    <div className="row-container">
      <h2 className="row-header">{title}</h2>
      <div className="row-cards">
        {movies?.map((movie) => {
          return (
            <img
              className={`movie-card ${isLarge && "movie-card-large"}`}
<<<<<<< Updated upstream
              key={movie.id}
              src={`${imageHost}${movie.poster_path}`}
=======
              onClick={() => handleOnClick(movie)}
              key={movie.id}
              src={`${imageHost}${
                isLarge ? movie.backdrop_path : movie.poster_path
              }`}
>>>>>>> Stashed changes
              alt={movie.name}
            ></img>
          );
        })}
      </div>
<<<<<<< Updated upstream
=======
      {trailerUrl && <ReactPlayer url={trailerUrl} playing={true} />}
>>>>>>> Stashed changes
    </div>
  );
}

export default Row;
