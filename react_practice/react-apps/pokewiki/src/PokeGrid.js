import React, { useState } from "react";
import PokeCard from "./PokeCard";
import "./PokeGrid.css";
import { AiOutlineSearch } from "react-icons/ai";

const PokeGrid = ({ data, onSelect }) => {
  // state for value of user input
  const [state, setState] = useState("");
  // state for the selected pokemon from the filter results

  // state to show if the user is entering an input
  const [isEditing, setIsEditing] = useState(false);

  const filter = (e) => {
    const input = e.target.value;
    if (input !== "") {
      let result = data.filter((pokemon) => {
        return pokemon.name.toLowerCase().startsWith(input.toLowerCase());
      });
      setState(input);
      setIsEditing(true);
      result.map((pokemon) => {
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
      });
    } else {
      return;
    }
    return;
  };

  return (
    <div className="">
      <div className="search">
        {/* <AiOutlineSearch className="search-icon" /> */}
        <input
          type="text"
          placeholder="Search pokemon..."
          className="search-input"
          onChange={filter}
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
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PokeGrid;
