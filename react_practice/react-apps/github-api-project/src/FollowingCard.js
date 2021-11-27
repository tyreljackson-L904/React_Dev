import React from "react";
import "./FollowerCard.css";
import { NavLink } from "react-router-dom";

const FollowingCard = ({ user, onFollow }) => {
  const handleFollowClick = (e) => {
    e.stopPropagation();
    onFollow(user);
  };

  return (
    <div className="follower-container">
      <NavLink to={`/${user.login}`} className="follower-card">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="follower-avatar"
        />
        <div className="follower-names">
          <h4 className="follower-username">{user.login}</h4>
        </div>
        <button className="follow-btn" onClick={handleFollowClick}>
          Follow
        </button>
      </NavLink>
    </div>
  );
};

export default FollowingCard;
