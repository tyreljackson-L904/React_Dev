import React, { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Search from "./Search";

const App = () => {
  const [query, setQuery] = useState("");

  const handleClick = () => {};
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="main">
      <div className="main-header">ProCode</div>
      <div className="main-content">
        <div className="main__center-container">
          <Search value={query} onClick={handleClick} onChange={handleChange} />
          {/* {BANNER} */}
          <div className="main__center-container__content">
            {/* {MAIN CONTENT/FILTERED RESULTS} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
