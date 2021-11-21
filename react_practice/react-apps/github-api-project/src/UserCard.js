import React from "react";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="circle-avatar">
          <img src={user.avatar_url} alt="" className="avatar" />
        </div>
        <h2 className="name">{user.name}</h2>
        <h3 className="username">{user.login}</h3>
        <div className="description">
          <p>{user.bio}</p>
        </div>
        <div className="user-stats">
          <div className="followers">
            <h4 className="text">Followers</h4>
            <p>{user.followers}</p>
          </div>
          <div className="following">
            <h4 className="text">Following</h4>
            <p>{user.following}</p>
          </div>
          <div className="repos">
            <h4 className="text">Repos</h4>
            <p>{user.public_repos}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
