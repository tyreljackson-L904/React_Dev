import React, { useState } from "react";
import FollowerCard from "../FollowerCard";
import "./Followers.css";

const Followers = ({ title, onClick, followersList, onCardClick }) => {
  const [selectedProfile, setSelectedProfile] = useState("");
  const [newProfile, setNewProfile] = useState([]);
  const handleFollowClick = (follower) => {
    console.log(follower);
    setSelectedProfile(follower);
    // getUserData(selectedProfile);
  };

  const getUserData = async () => {
    const login = selectedProfile.login;
    try {
      const url = `https://api.github.com/users/${login}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      });
      const data = await response.json();

      setNewProfile(data);
      console.log(newProfile);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="followers-container">
      <div className="title" onClick={onClick}>
        {title}
      </div>
      <div className="main-content">
        {followersList.map((follower, index) => {
          return (
            <ul className="follower-list">
              <FollowerCard
                key={index}
                follower={follower}
                onFollow={handleFollowClick}
                onCardClick={onCardClick}
              />
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Followers;
