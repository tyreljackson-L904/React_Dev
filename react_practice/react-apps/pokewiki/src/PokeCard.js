import React from "react";
import { Link } from "react-router-dom";
import "./PokeCard.css";

const PokeCard = ({ pokemon, onSelect }) => {
  const handleClick = () => {
    onSelect(pokemon); // when this is invoked here i want to pass the "value" in as a param to the callback function in the App component
  };

  const type = pokemon.types[0].type.name;
  const style = type + " grid-list-item";

  return (
    <Link
      to="/pokemondetail"
      key={pokemon.id}
      className={style}
      onClick={handleClick}
    >
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-img"
      />
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <h4 className="pokemon-hitpoints">HP: {pokemon.base_experience}</h4>
    </Link>
  );
};

export default PokeCard;
