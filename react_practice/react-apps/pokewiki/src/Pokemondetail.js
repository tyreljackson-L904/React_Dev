import React, { useState, useEffect } from "react";
import "./Pokemondetail.css";
import BackButton from "./BackButton";

const PokemonDetail = ({ pokemon }) => {
  const [current, setCurrent] = useState(
    JSON.parse(localStorage.getItem("pokemon")) || pokemon
  );

  useEffect(() => {
    localStorage.setItem("pokemon", JSON.stringify(pokemon));
    if (localStorage.getItem("pokemon")) {
      JSON.parse(localStorage.getItem("pokemon"));
    }
  }, [pokemon]);

  const type = current.types[0].type.name;
  const style = type + " wrapper";
  const img = current.sprites.other.dream_world.front_default;
  const name = current.name;
  const hp = current.base_experience;
  const move = current.moves[0].move.name;
  const abilities = current.abilities[0].ability.name;

  return (
    <div className="">
      <div className="container">
        <div className={style}>
          <div className="image-name">
            <img src={img} alt={name} />
            <h1 className="name">{name}</h1>
          </div>
          <div className="detail-wrapper">
            <h3 className="base-experience">
              HP: <span className="hp-color">{hp}</span>
            </h3>
            <h3 className="type">
              Type: <span className="type-color">{type}</span>
            </h3>
            <h3 className="move-list">Move: {move}</h3>
            <h3 className="abilities">Abilities: {abilities}</h3>
          </div>
        </div>
      </div>
      <BackButton />
    </div>
  );
};

export default PokemonDetail;
