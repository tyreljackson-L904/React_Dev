import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import "./PokeCard.css";
import PokemonDetail from "./Pokemondetail";

const PokeCard = ({ pokemon, onSelect }) => {
  const handleClick = () => {
    console.log(pokemon);
    onSelect(pokemon); // when this is invoked here i want to pass the "value" in as a param to the callback function in the App component
  };
  return (
    <Link
      to="/pokemondetail"
      key={pokemon.id}
      className="grid-list-item"
      onClick={handleClick}
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
