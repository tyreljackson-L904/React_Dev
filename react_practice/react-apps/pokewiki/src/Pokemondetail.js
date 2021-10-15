import React from "react";

const PokemonDetail = ({ data }) => {
  const pokemon = [...data, data];
  console.log(pokemon);
  return (
    <div className="container">
      <img src={pokemon.sprites.front_shiny} alt={data.name} />
      <h2 className="name">{pokemon.name}</h2>
      {/* <div className="details">
        <h3 className="base-experience">{pokemon.base_experience}</h3>
        <h3 className="move-title">Moves: {pokemon.moves.move.name}</h3>
        <h3 className="stats">
          Stats: {pokemon.stats[0].stat.name}
          {pokemon.stats[1].stat.name}
          {pokemon.stats[2].stat.name}
          {pokemon.stats[3].stat.name}
          {pokemon.stats[4].stat.name}
        </h3>
      </div> */}
    </div>
  );
};

export default PokemonDetail;
