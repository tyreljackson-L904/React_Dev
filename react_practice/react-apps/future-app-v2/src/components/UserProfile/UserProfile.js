import React from "react";
import avatar from "../../user-profile-img.png";
import { Link } from "react-router-dom";
import { users } from "../../Data/MOCK_DATA";

const UserProfile = () => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div className="container">
            <div className="user__header">
              <img
                src={avatar}
                alt="user-avatar"
                className="avatar"
                width="75px"
                height="75px"
              />
              <h3 className="username">{user.username}</h3>
              <h3 className="fullName">{user.name}</h3>
              <ul className="social-links">
                <Link to="/:link">{user.socials[0]}</Link>
                <Link to="/:link">{user.socials[1]}</Link>
                <Link to="/:link">{user.socials[2]}</Link>
                <Link to="/:link">{user.socials[3]}</Link>
              </ul>
              <div className="search__header container"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserProfile;
