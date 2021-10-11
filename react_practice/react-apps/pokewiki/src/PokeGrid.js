import React, { useState } from "react";
import PokeCard from "./PokeCard";
import "./PokeGrid.css";

const PokeGrid = () => {
  const [selected, setSelected] = useState(false);
  const [pokemonName, setPokemonName] = useState();
  const [pokemons, setPokemons] = useState([
    {
      id: "1",
      name: "Charmeleon",
      img: "img",
      hp: "50HP",
      types: "Fire",
    },
  ]);

  return (
    <div className="grid-container">
      <ul className="pokemon-grid">
        {pokemons.map((pokemon) => {
          return (
            <li className="grid-item" key={pokemon.id}>
              <PokeCard
                name={pokemon.name}
                hp={pokemon.hp}
                types={pokemon.types}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PokeGrid;
