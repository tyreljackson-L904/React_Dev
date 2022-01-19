import React from "react";
import "../styles/UserCard.css";

interface UserType {
  html_url: string;
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: string;
  following: string;
  public_repos: string;
}

interface UserProps {
  user: UserType;
  // onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const UserCard: React.FC<UserProps> = ({ user }: UserProps) => {
  const handleFollowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // onFollow(user);
    const repoTab = window.open(user.html_url);
    repoTab!.focus();
  };
  return (
    <div className="card-container">
      <div className="card">
        <div className="circle-avatar">
          <img src={user.avatar_url} alt="" className="avatar" />
        </div>
        <h2 className="name">{user.name}</h2>
        <h3 className="username">{user.login}</h3>
        <button className="follow-btn" onClick={handleFollowClick}>
          Follow
        </button>
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
