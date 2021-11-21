import React, { useState, useParams, useLocation } from "react";
import Home from "./ResultsTabs/Home";
import Followers from "./ResultsTabs/Followers";
import Repositories from "./ResultsTabs/Repositories";
import "./ResultsTabs.css";
import { Routes, Route, Link } from "react-router-dom";

const ResultsTabs = ({ searchResult }) => {
  console.log(searchResult);
  const [activeTab, setActiveTab] = useState("Home");
  const listItemClassName = "tab-item";
  // const location = useLocation();
  // const { userData } = location.state;

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
            to={{
              pathname: "/home",
              state: searchResult,
            }}
            className={activeTab === "Home" ? "active" : listItemClassName}
            onClick={handleClickTab1}
          >
            <h4>Home</h4>
          </Link>

          <Link
            to={{
              pathname: "/:user/followers",
              state: searchResult.followers,
            }}
            className={activeTab === "Followers" ? "active" : listItemClassName}
            onClick={handleClickTab2}
          >
            <h4>Followers</h4>
          </Link>

          <Link
            to="/:user/repositories"
            className={activeTab === "Repos" ? "active" : listItemClassName}
            onClick={handleClickTab3}
          >
            <h4>Repos</h4>
          </Link>
        </ul>
        <div className="current-tab">
          {activeTab === "Home" && <Home searchResult={searchResult} />}
          {activeTab === "Followers" && <Followers />}
          {activeTab === "Repos" && <Repositories />}
        </div>
      </div>
    </div>
  );
};

export default ResultsTabs;
