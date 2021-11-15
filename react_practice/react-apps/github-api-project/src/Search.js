import React from "react";
import "./Search.css";

const Search = ({ onChange, onClick }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        onChange={onChange}
        size={80}
      />
      <button className="search-btn" onClick={onClick}>
        Fetch User
      </button>
    </div>
  );
};

export default Search;
