import React from "react";
import "../styles/FollowerCard.css";
import { NavLink } from "react-router-dom";

const FollowerCard = ({ user, onFollow }) => {
  const handleFollowClick = (e) => {
    e.stopPropagation();
    onFollow(user);
    const repoTab = window.open(user.html_url);
    repoTab.focus();
  };

  return (
    <div className="follower-container">
      <NavLink to={`/${user.login}`} className="follower-card">
        <div className="follower-names">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="follower-avatar"
          />
          <h4 className="follower-username">{user.login}</h4>
        </div>
        <button to="/" className="follow-btn" onClick={handleFollowClick}>
          Follow
        </button>
      </NavLink>
    </div>
  );
};

export default FollowerCard;
