import React from "react";
import "../css/HomeSearchBar.css";

const HomeSearchBar = () => {
  return (
    <div className="search">
      <input
        type="text"
        className="main-searchbar"
        size={"80"}
        placeholder="Search ProCode"
      />
      <button className="search-btn" type="submit">
        Search
      </button>
    </div>
  );
};

export default HomeSearchBar;
