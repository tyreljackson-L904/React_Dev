import React from "react";

const Searchbar = () => {
  return (
    <div className="search-container">
      <input type="text" className="search" placeholder="Search WeeCode..." />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default Searchbar;
