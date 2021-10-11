import React, { useState } from "react";
import PokeCard from "./PokeCard";
import "./PokeGrid.css";

const PokeGrid = () => {
  const [selected, setSelected] = useState(false);
  const [pokemonName, setPokemonName] = useState();
  const [pokemonData, setPokemonData] = useState({
    id: "1",
    name: "Charmeleon",
    img: "img",
    hp: "50HP",
    types: "Fire",
  });

  return (
    <div className="grid-container">
      <ul className="pokemon-grid">
        {/* {pokemonData.map((pokemon) => {
          return (
            <li className="grid-item">
              <PokeCard
                id={pokemon.id}
                name={pokemon.name}
                hp={pokemon.hp}
                types={pokemon.types}
              />
            </li>
          );
        })} */}
      </ul>
    </div>
  );
};

export default PokeGrid;
