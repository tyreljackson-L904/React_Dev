import React from "react";
import Octacat from "./Octocat.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div div>
        <img src={Octacat} alt="Github Octacat" width="250px" height="225px" />
        <h1 className="header">Github Api</h1>
      </div>
      <h3 className="sub-header">Search Github users using the Github api</h3>
    </div>
  );
};

export default Header;
