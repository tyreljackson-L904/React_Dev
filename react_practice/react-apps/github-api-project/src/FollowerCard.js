import React from "react";
import "./FollowerCard.css";
import { NavLink } from "react-router-dom";

const FollowerCard = ({ follower, onFollow, onCardClick }) => {
  const handleFollowClick = (e) => {
    e.stopPropagation();
    onFollow(follower);
  };
  console.log(follower);
  return (
    <div className="follower-container">
      <NavLink to={`/${follower.login}`} className="follower-card">
        <img
          src={follower.avatar_url}
          alt={follower.login}
          className="follower-avatar"
        />
        <div className="follower-names">
          <h4 className="follower-username">{follower.login}</h4>
        </div>
        <button className="follow-btn" onClick={handleFollowClick}>
          Follow
        </button>
      </NavLink>
    </div>
  );
};

export default FollowerCard;
