import React from "react";
import "./FollowerCard.css";
import { Link } from "react-router-dom";

const FollowerCard = ({ follower, onFollow, onCardClick }) => {
  const handleFollowClick = (e) => {
    e.stopPropagation();
    onFollow(follower);
  };

  return (
    <div className="follower-container">
      <Link to={`/${follower.login}`} className="follower-card">
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
      </Link>
    </div>
  );
};

export default FollowerCard;
