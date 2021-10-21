import React from "react";

import PokeCard from "./PokeCard";
import "./PokeGrid.css";

const PokeGrid = ({ data, onSelect }) => {
  return (
    <ul className="grid-container">
      {data.map((pokemon) => {
        return (
          <PokeCard key={pokemon.id} pokemon={pokemon} onSelect={onSelect} />
        );
      })}
    </ul>
  );
};

export default PokeGrid;
