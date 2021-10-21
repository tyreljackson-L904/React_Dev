import React from "react";

import PokeCard from "./PokeCard";
import "./PokeGrid.css";

const PokeGrid = ({ data, onSelect }) => {
  return (
    <ul className="grid-container">
      {data.map((pokemon) => {
        return (
          <PokeCard
            key={pokemon.id}
            onSelect={onSelect}
            pokemon={pokemon}
            img={pokemon.sprites.front_default}
            name={pokemon.name}
            hp={pokemon.base_experience}
            type={pokemon.types[0].type.name}
          />
        );
      })}
    </ul>
  );
};

export default PokeGrid;
