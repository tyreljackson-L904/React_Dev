import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PokeCard.css";

const PokeCard = (props) => {
  const [selected, setSelected] = useState(null);

  const getValue = (value) => {
    setSelected(value);
  };
  return (
    <Link
      to="/pokemondetail"
      key={props.pokemon.id}
      className="grid-list-item"
      onClick={getValue}
    >
      <img
        src={props.pokemon.sprites.front_shiny}
        alt={props.pokemon.name}
        className="pokemon-img"
      />
      <h2 className="pokemon-name">{props.pokemon.name}</h2>
      <h4 className="pokemon-hitpoints">HP: {props.pokemon.base_experience}</h4>
    </Link>
  );
};

export default PokeCard;
