import React from "react";
import { Link } from "react-router-dom";
import "./PokeCard.css";

const PokeCard = ({ pokemon, id, img, name, hp, type, onSelect }) => {
  const style = type + " grid-list-item";
  const handleClick = () => {
    onSelect(pokemon);
  };

  return (
    <Link to="/pokemondetail" key={id} className={style} onClick={handleClick}>
      <img src={img} alt={img.name} className="pokemon-img" />
      <h2 className="pokemon-name">{name}</h2>
      <h4 className="pokemon-hitpoints">
        HP: <span className="hp-color">{hp}</span>
      </h4>
    </Link>
  );
};

export default PokeCard;
