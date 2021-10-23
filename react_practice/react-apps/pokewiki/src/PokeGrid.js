import React, { useState, useEffect } from "react";
import PokeCard from "./PokeCard";
import "./PokeGrid.css";
import PreviousPageBtn from "./PreviousPageBtn";
import NextPageBtn from "./NextPageBtn";

const PokeGrid = ({ data, onSelect, fetchPokemon }) => {
  // state for value of user input
  const [searchTerm, setSearchTerm] = useState("");
  // state for the selected pokemon from the filter results
  const [state, setState] = useState([]);

  const findPokemon = (e) => {
    const input = e.target.value;
    setSearchTerm(input);
    data.filter((pokemon) => {
      if (pokemon.name.startsWith(searchTerm.toLowerCase())) {
        setState((newArr) => [...newArr, pokemon]);
      }
    });
  };

  return (
    <div className="">
      <div className="search">
        <input
          type="text"
          placeholder="Search pokemon..."
          className="search-input"
          onChange={findPokemon}
        />
      </div>

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
              order={pokemon.order}
            />
          );
        })}
      </ul>
      <div className="page-controls">
        <PreviousPageBtn fetchPokemon={fetchPokemon} />
        <NextPageBtn fetchPokemon={fetchPokemon} />
      </div>
    </div>
  );
};

export default PokeGrid;
