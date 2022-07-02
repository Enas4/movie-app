import React, { useContext } from "react";
import { AppContext } from "./MovieContext/context";

const Search = () => {
  const { query, setQuery, Error } = useContext(AppContext);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Search</h2>
      <section>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </form>
        <div>
          <p>{Error.show && Error.msg}</p>
        </div>
      </section>
    </div>
  );
};

export default Search;
