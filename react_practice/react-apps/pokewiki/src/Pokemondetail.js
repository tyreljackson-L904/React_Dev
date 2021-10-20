import React from "react";

const PokemonDetail = ({ value }) => {
  console.log(value);
  return (
    <div className="container">
      <img src={value.sprites.front_shiny} alt={value.name} />
      <h2 className="name">{value.name}</h2>
      <div className="details">
        <h3 className="base-experience">{value.base_experience}</h3>
        {/* <h3 className="move-title">Moves: {value.moves.name}</h3> */}
        <h3 className="stats">
          Stats: {value.stats[0].stat.name}
          {value.stats[1].stat.name}
          {value.stats[2].stat.name}
          {value.stats[3].stat.name}
          {value.stats[4].stat.name}
        </h3>
      </div>
    </div>
  );
};

export default PokemonDetail;
