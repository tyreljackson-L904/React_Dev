import React from "react";
import "../styles/FollowerCard.css";
import { NavLink } from "react-router-dom";

const FollowerCard = ({ user, onFollow }) => {
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
      </NavLink>
    </div>
  );
};

export default FollowerCard;
