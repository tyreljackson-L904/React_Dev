import React from "react";
import "./Pokemondetail.css";
import BackButton from "./BackButton";

const PokemonDetail = ({ value }) => {
  const type = value.types[0].type.name;
  const style = type + " wrapper";

  return (
    <div className="">
      <div className="container">
        <div className={style}>
          <div className="image-name">
            <img
              src={value.sprites.other.dream_world.front_default}
              alt={value.name}
            />
            <h1 className="name">{value.name}</h1>
          </div>

          <div className="detail-wrapper">
            <h3 className="base-experience">
              HP: <span className="hp-color">{value.base_experience}</span>
            </h3>
            <h3 className="type">
              Type:{" "}
              <span className="type-color">{value.types[0].type.name}</span>
            </h3>

            <h3 className="move-list">
              Move: {value.moves[0].move.name}
              {/* {value.moves.slice(0, 5).map((move, index) => (
                <li key={index}>{`${move.move.name}` + ", "}</li>
              ))} */}
            </h3>

            <h3 className="abilities">
              Abilities: {value.abilities[0].ability.name}
              {", "}
              {value.abilities[1].ability.name}
            </h3>
          </div>
        </div>
      </div>
      <BackButton />
    </div>
  );
};

export default PokemonDetail;
