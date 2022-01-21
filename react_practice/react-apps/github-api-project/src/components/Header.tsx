import React from "react";
import Octacat from "../images/Octocat.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="container">
      <div>
        <img src={Octacat} alt="Github Octacat" className="octocat-image" />
      </div>
      <h3 className="sub-header">Search Github users using the Github api</h3>
    </div>
  );
};

export default Header;
