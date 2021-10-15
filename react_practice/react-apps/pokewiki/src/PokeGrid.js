import React from "react";

import PokeCard from "./PokeCard";
import "./PokeGrid.css";

const PokeGrid = ({ data, handleClick, value }) => {
  console.log(handleClick);
  return (
    <ul className="grid-container">
      {data.map((pokemon) => {
        return (
          <PokeCard
            key={pokemon.id}
            pokemon={pokemon}
            handleClick={handleClick}
            value={value}
          />
        );
      })}
    </ul>
  );
};

export default PokeGrid;
