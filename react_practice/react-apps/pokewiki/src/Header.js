import React from "react";
import "./Header.css";
import pokeball from "./pokeball.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="title">
        <h1 className="title-name">Pokédex</h1>
        <img
          src={pokeball}
          alt="pokeball"
          className="title-image"
          width="120"
          height="120"
        />
      </div>
    </div>
  );
};

export default Header;
