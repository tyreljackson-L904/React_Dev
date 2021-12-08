import React, { useState, useEffect } from "react";
import "../styles/FollowingCard.css";
import { NavLink } from "react-router-dom";

const FollowingCard = ({ user, onFollow }) => {
  const [followingCount, setFollowingCount] = useState(null);
  // const handleFollowClick = (e) => {
  //   e.stopPropagation();
  //   onFollow(user);
  // };
  useEffect(() => {
    const getFollowingCount = async () => {
      const url = `https://api.github.com/users/${user.login}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      });
      const data = await response.json();
      setFollowingCount(data.followers);
    };
    getFollowingCount();
  }, [user.login]);

  return (
    <div className="following-container">
      <NavLink to={`/${user.login}`} className="following-card">
        <div className="following-names">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="following-avatar"
          />
        </div>
        <div>
          <h4 className="follower-username">{user.login}</h4>
          <h4 className="follower-count">Followers: {followingCount}</h4>
        </div>
        {/* <button className="follow-btn" onClick={handleFollowClick}>
          Follow
        </button> */}
      </NavLink>
    </div>
  );
};

export default FollowingCard;
