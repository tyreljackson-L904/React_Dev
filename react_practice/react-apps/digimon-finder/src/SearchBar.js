import React from "react";

const SearchBar = ({ value, onChange, children, btnTitle }) => {
  return (
    <div className="search-container">
      <input type="text" className="search" onChange={onChange} value={value} />
      <button className="search-btn">{btnTitle}</button>
    </div>
  );
};

export default SearchBar;
