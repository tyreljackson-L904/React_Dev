import React from "react";
import "./FetchPokeData.css";

const FetchPokeData = () => {
  const fetchPokemons = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="btn-container">
      <button className="fetch-btn" onClick={fetchPokemons}>
        Fetch Pokemon
      </button>
    </div>
  );
};

export default FetchPokeData;
