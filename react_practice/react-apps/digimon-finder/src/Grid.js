import React from "react";
import "./Grid.css";

const Grid = ({ data }) => {

  return (
    <div className="grid-container">
      <ul className="grid-list" >
        {data.map((digimon, index) => {
          return (
            <li className="grid-item" key={index}>
                <img src={digimon.img} alt={digimon.name} className="image" />
                <h3 className="name">{digimon.name}</h3>
                <h4 className="level">{digimon.level}</h4>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Grid;
