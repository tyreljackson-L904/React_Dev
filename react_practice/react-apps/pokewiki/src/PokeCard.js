import React from "react";

const PokeCard = ({ img, name, hp, types }) => {
  return (
    <div className="card">
      <img src={img} alt="" className="pokemon-img" />
      <h3 className="pokemon-name">{name}</h3>
      <h3 className="pokemon-hitpoints">{hp}</h3>
      <h4 className="pokemon-type">{types}</h4>
    </div>
  );
};

export default PokeCard;
