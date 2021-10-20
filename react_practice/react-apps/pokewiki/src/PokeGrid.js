import React from "react";

import PokeCard from "./PokeCard";
import "./PokeGrid.css";

const PokeGrid = (props) => {
  console.log(props);
  return (
    <ul className="grid-container">
      {props.data.map((pokemon) => {
        return (
          <PokeCard
            key={pokemon.id}
            pokemon={pokemon}
            onSelect={props.onSelect}
          />
        );
      })}
    </ul>
  );
};

export default PokeGrid;
