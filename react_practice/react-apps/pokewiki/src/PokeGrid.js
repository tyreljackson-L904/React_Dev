import React, { useState } from "react";
import PokeCard from "./PokeCard";
import "./PokeGrid.css";

const PokeGrid = () => {
  const [state, setState] = useState(false);

  const pokemonList = [
    "Charizard",
    "Blastoise",
    "Bulbasour",
    "Charizard",
    "Blastoise",
    "Bulbasour",
  ];

  return (
    <div className="grid-container">
      <ul className="pokemon-grid">
        {pokemonList.map((pokemon) => {
          return (
            <li className="grid-item">
              <PokeCard pokemon={pokemon} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PokeGrid;
