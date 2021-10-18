import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import "./PokeCard.css";
import PokemonDetail from "./Pokemondetail";

const PokeCard = ({ pokemon, value, callback }) => {
  const handleClick = (value) => {
    value = pokemon;
    console.log(value);
    return;
  };

  return (
    <Link
      to={callback}
      key={pokemon.id}
      className="grid-list-item"
      onClick={handleClick}
      value={value}
    >
      <img
        src={pokemon.sprites.front_shiny}
        alt={pokemon.name}
        className="pokemon-img"
      />
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <h4 className="pokemon-hitpoints">HP: {pokemon.base_experience}</h4>
    </Link>
  );
};

export default PokeCard;
