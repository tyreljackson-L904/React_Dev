import React from "react";
import "../styles/Search.css";

const Search = ({ query, onChange }) => {
  return (
    <div>
      <input
        type="text"
        className="search"
        value={query}
        placeholder="Search"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
