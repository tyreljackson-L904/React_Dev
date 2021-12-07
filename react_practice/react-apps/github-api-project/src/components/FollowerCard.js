import React, { useState, useEffect } from "react";
import "../styles/FollowerCard.css";
import { NavLink } from "react-router-dom";

const FollowerCard = ({ user }) => {
  const [followerCount, setFollowerCount] = useState(null);
  useEffect(() => {
    const getFollowerCount = async () => {
      const url = `https://api.github.com/users/${user.login}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      });
      const data = await response.json();
      setFollowerCount(data.followers);
    };
    getFollowerCount();
  }, [user.login]);

  return (
    <div className="follower-container">
      <NavLink to={`/${user.login}`} className="follower-card">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="follower-avatar"
        />
        <div>
          <h4 className="follower-username">{user.login}</h4>
          <h4 className="follower-count">Followers: {followerCount}</h4>
        </div>
      </NavLink>
    </div>
  );
};

export default FollowerCard;
