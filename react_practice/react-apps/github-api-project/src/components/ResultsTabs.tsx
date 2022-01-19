import React from "react";
import Home from "./Home";
import Followers from "./Followers";
import Repos from "./Repositories";
import "../styles/ResultsTabs.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Following from "./Following";

type ResultsTabProps = {
  isActive: boolean;
};

const ResultsTabs = () => {
  const listItemClassName = "tab-item";

  const activeClassname = ({ isActive }: ResultsTabProps) => {
    return isActive ? "active" : listItemClassName;
  };

  return (
    <div className="results-container">
      <div className="header-container">
        <ul className="tab-list">
          <NavLink
            end
            to={{
              pathname: ".",
            }}
            className={activeClassname}
          >
            <h4>Home</h4>
          </NavLink>

          <NavLink
            to={{
              pathname: "followers",
            }}
            className={activeClassname}
          >
            <h4>Followers</h4>
          </NavLink>

          <NavLink
            to={{
              pathname: "following",
            }}
            className={activeClassname}
          >
            <h4>Following</h4>
          </NavLink>

          <NavLink
            to={{
              pathname: "repositories",
            }}
            className={activeClassname}
          >
            <h4>Repos</h4>
          </NavLink>
        </ul>
        <div className="current-tab">
          <Routes>
            <Route index element={<Home />} />
            <Route path="followers" element={<Followers />} />
            <Route path="following" element={<Following />} />
            <Route path="repositories" element={<Repos />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ResultsTabs;
