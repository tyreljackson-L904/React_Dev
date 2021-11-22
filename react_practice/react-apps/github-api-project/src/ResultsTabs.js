import React, { useState } from "react";
import Home from "./ResultsTabs/Home";
import Followers from "./ResultsTabs/Followers";
import Repositories from "./ResultsTabs/Repositories";
import "./ResultsTabs.css";
import { Routes, Route, NavLink, useParams } from "react-router-dom";

const ResultsTabs = ({ searchResult }) => {
  const [followersList, setFollowersList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [activeTab, setActiveTab] = useState("Home");
  const [isLoading, setIsLoading] = useState(true);
  const username = searchResult.login;
  const listItemClassName = "tab-item";
  const { login } = useParams();
  console.log(login);

  const activeClassname = ({ isActive }) => {
    return isActive ? "active" : listItemClassName;
  };

  const handleCardClick = (follower) => {
    setSelected(follower);
  };

  const handleClickTab1 = () => {
    setActiveTab("Home");
  };

  const handleClickTab2 = () => {
    setActiveTab("Followers");
    getFollowers();
  };

  const handleClickTab3 = () => {
    setActiveTab("Following");
  };

  const handleClickTab4 = () => {
    setActiveTab("Repos");
  };

  const getFollowers = async () => {
    try {
      const url = `https://api.github.com/users/${login}/followers`;
      const response = await fetch(url, {
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      });
      const data = await response.json();
      console.log(data);
      setFollowersList(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="results-container">
      <div className="header-container">
        <ul className="tab-list">
          <NavLink
            end
            to={{
              pathname: ".",
              state: searchResult,
            }}
            className={activeClassname}
          >
            <h4>Home</h4>
          </NavLink>

          <NavLink
            to={{
              pathname: "followers",
              state: followersList,
            }}
            className={activeClassname}
          >
            <h4>Followers</h4>
          </NavLink>

          <NavLink
            to={{
              pathname: `/${username}/following`,
              state: searchResult.following,
            }}
            className={activeClassname}
          >
            <h4>Following</h4>
          </NavLink>

          <NavLink
            to={{
              pathname: "repositories",
              state: searchResult.public_repos,
            }}
            className={activeClassname}
          >
            <h4>Repos</h4>
          </NavLink>
        </ul>
        <div className="current-tab">
          <Routes>
            <Route index element={<Home selected={selected} />} />
            <Route
              path="followers"
              element={
                <Followers
                  followersList={followersList}
                  onCardClick={handleCardClick}
                />
              }
            />
            <Route path="following" element={<div />} />
            <Route path="repositories" element={<Repositories />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ResultsTabs;
