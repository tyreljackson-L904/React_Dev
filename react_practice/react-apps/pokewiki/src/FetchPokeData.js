import React from "react";
import "./FetchPokeData.css";

const FetchPokeData = ({ fetchPokemons }) => {
  return (
    <div className="btn-container">
      <button className="fetch-btn" onClick={fetchPokemons}>
        Fetch Pokemon
      </button>
    </div>
  );
};

export default FetchPokeData;
