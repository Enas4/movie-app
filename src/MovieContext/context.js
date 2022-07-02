import { createContext, useEffect, useState } from "react";
import React from "react";

const AppContext = createContext();

const Api_url = `http://www.omdbapi.com/?apikey=69cc1c9a&s`;

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [Error, setError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("superman");
  const [singleMovie, setSingleMovie] = useState(null);

  const getMovies = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setMovie(data.Search);
        setLoading(false);
        setError({
          show: false,
          msg: "",
        });
      } else {
        setError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieById = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=69cc1c9a&i=${id}`
      );
      const data = await res.json();
      setSingleMovie(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getMovies(`${Api_url}&s=${query}`);
    }, 1000);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <AppContext.Provider
      value={{
        loading,
        movie,
        Error,
        query,
        setQuery,
        singleMovie,
        getMovieById,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
