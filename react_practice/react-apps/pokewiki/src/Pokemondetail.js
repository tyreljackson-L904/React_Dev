import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Pokemondetail.css";
import BackButton from "./BackButton";

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { pokemonName } = useParams();

  const getPokemonByName = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const data = await response.json();
    setPokemon(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonByName();
  }, [pokemonName]);

  if (isLoading) {
    return "is Loading";
  }

  const type = pokemon.types[0].type.name;
  const style = type + " wrapper";
  const img = pokemon.sprites.other.dream_world.front_default;
  const name = pokemon.name;
  const hp = pokemon.base_experience;
  const move = pokemon.moves[0].move.name;
  const abilities = pokemon.abilities[0].ability.name;

  return (
    <div className="">
      <div className="container">
        <div className={style}>
          <div className="image-name">
            <img src={img} alt={name} />
            <h1 className="name">{name}</h1>
          </div>
          <div className="detail-wrapper">
            <span className="hp-text">HP:</span>{" "}
            <span className="hp-color">{hp}</span>
            <span>Type:</span> <span className="type-color">{type}</span>
            <span>Move:</span> <span>{move}</span>
            <span>Abilities</span> <span>{abilities}</span>
          </div>
        </div>
      </div>
      <BackButton />
    </div>
  );
};

export default PokemonDetail;
