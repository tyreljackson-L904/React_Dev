import React from "react";
import Octacat from "../images/Octocat.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="container">
      <div div>
        <img src={Octacat} alt="Github Octacat" width="250px" height="225px" />
      </div>
      <h3 className="sub-header">Search Github users using the Github api</h3>
    </div>
  );
};

export default Header;
