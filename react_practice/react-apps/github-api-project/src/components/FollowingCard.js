import React from "react";
import "../styles/FollowingCard.css";
import { NavLink } from "react-router-dom";

const FollowingCard = ({ user, onFollow }) => {
  const handleFollowClick = (e) => {
    e.stopPropagation();
    onFollow(user);
  };

  return (
    <div className="following-container">
      <NavLink to={`/${user.login}`} className="following-card">
        <div className="following-names">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="following-avatar"
          />
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
