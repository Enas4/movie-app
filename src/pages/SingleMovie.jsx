import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../MovieContext/context";

const SingleMovie = () => {
  const { getMovieById, singleMovie } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    getMovieById(id);
  }, [id]);
  console.log(singleMovie);

  return (
    <>
      <div>
        <h3>{singleMovie?.Title}</h3>
        <img src={singleMovie?.Poster} alt="not found" />
      </div>
    </>
  );
};

export default SingleMovie;
