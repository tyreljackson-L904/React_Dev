import React from "react";
import "./Search.css";

const Search = ({ onChange, onClick, value }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        onChange={onChange}
        value={value}
        size={80}
      />
      <button type="submit" className="search-btn" onClick={onClick}>
        Fetch User
      </button>
    </div>
  );
};

export default Search;
