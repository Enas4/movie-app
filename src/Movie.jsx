import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./MovieContext/context";
import "./Movie.css";
import SingleMovie from "./pages/SingleMovie";

const Movie = () => {
  const { movie, loading } = useContext(AppContext);
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(movie);
  return (
    <>
      <section className="Movie-sec">
        {movie.map((currEle) => {
          const { Title, imdbID, Poster } = currEle;
          const movieName = Title.substring(0, 15);
          return (
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div>
                <h3>
                  {movieName.length >= 15 ? `${movieName}...` : movieName}
                </h3>
                <img src={Poster} alt={imdbID} />
              </div>
            </NavLink>
          );
        })}
      </section>
    </>
  );
};

export default Movie;
