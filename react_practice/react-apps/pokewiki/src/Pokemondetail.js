import React from "react";

const PokemonDetail = ({ value }) => {
  console.log(value);
  return (
    <div className="container">
      <img src={value.sprites} alt={value.name} />
      <h2 className="name">{value.name}</h2>
      {/* <div className="details">
        <h3 className="base-experience">{props.pokemon.base_experience}</h3>
        <h3 className="move-title">Moves: {props.pokemon.moves.move.name}</h3>
        <h3 className="stats">
          Stats: {props.pokemon.stats[0].stat.name}
          {props.pokemon.stats[1].stat.name}
          {props.pokemon.stats[2].stat.name}
          {props.pokemon.stats[3].stat.name}
          {props.pokemon.stats[4].stat.name}
        </h3>
      </div> */}
    </div>
  );
};

export default PokemonDetail;
