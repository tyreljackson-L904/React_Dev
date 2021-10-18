import React from "react";

import PokeCard from "./PokeCard";
import "./PokeGrid.css";

const PokeGrid = (props) => {
  return (
    <ul className="grid-container">
      {props.data.map((pokemon) => {
        return <PokeCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </ul>
  );
};

export default PokeGrid;
