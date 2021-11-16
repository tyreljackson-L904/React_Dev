import React, { useState } from "react";
import Home from "./ResultsTabs/Home";
import Followers from "./ResultsTabs/Followers";
import Repositories from "./ResultsTabs/Repositories";
import "./DisplayResults.css";
import { Link } from "react-router-dom";

const ResultsTabs = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const listItemClassName = "tab-item";

  const handleClickTab1 = () => {
    setActiveTab("Home");
  };
  const handleClickTab2 = () => {
    setActiveTab("Followers");
  };
  const handleClickTab3 = () => {
    setActiveTab("Repos");
  };

  return (
    <div className="results-container">
      <div className="header-container">
        <ul className="tab-list">
          <Link
            to="/:user/home"
            className={activeTab === "Home" ? "active" : listItemClassName}
          >
            <h4 onClick={handleClickTab1}>Home</h4>
          </Link>
          <Link
            to="/:user/followers"
            className={activeTab === "Followers" ? "active" : listItemClassName}
          >
            <h4 onClick={handleClickTab2}>Followers</h4>
          </Link>
          <Link
            to="/:user/repositories"
            className={activeTab === "Repos" ? "active" : listItemClassName}
          >
            <h4 onClick={handleClickTab3}>Repos</h4>
          </Link>
        </ul>
        <div className="current-tab">
          {activeTab === "Home" && <Home />}
          {activeTab === "Followers" && <Followers />}
          {activeTab === "Repos" && <Repositories />}
        </div>
      </div>
    </div>
  );
};

export default ResultsTabs;
