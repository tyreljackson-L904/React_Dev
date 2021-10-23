import React, { useState } from "react";
import PokeCard from "./PokeCard";
import "./PokeGrid.css";
import Button from "./PreviousPageBtn";
import NextPageBtn from "./NextPageBtn";

const PokeGrid = ({ data, onSelect, onClickPrevious, onClickNext }) => {
  // state for value of user input
  const [searchTerm, setSearchTerm] = useState("");
  // state for the selected pokemon from the filter results

  const findPokemon = (e) => {
    const input = e.target.value;
    setSearchTerm(input);
  };

  const filteredPokemon = data.filter((pokemon) => {
    return pokemon.name.startsWith(searchTerm.toLowerCase());
  });

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
        {filteredPokemon.map((pokemon) => {
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
        <Button onClick={onClickPrevious}>{"<"} Prev</Button>
        <Button onClick={onClickNext}>Next {">"}</Button>
      </div>
    </div>
  );
};

export default PokeGrid;
