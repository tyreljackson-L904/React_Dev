import React from "react";

const Following = ({ title, onClick, followers }) => {
  console.log(followers);
  return (
    <div className="followers-container">
      <div className="title" onClick={onClick}>
        {title}
      </div>
      <div className="main-content">
        <p>
          {followers.map((follower, index) => {
            return (
              <ul className="follower-list">
                <li key={index} className="follower">
                  {follower.avatar_url}
                  {follower.login}
                </li>
              </ul>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Following;
