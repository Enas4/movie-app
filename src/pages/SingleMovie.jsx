import React from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  return <>SingleMovie{id}</>;
};

export default SingleMovie;
