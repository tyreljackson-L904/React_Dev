import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/RepoCard.css";

const RepoCard = ({ repo }) => {
  console.log(repo);
  console.log(repo.html_url);

  const handleViewClick = () => {
    window.location.href = repo.html_url;
  };

  const handleClick = () => {};
  return (
    <div className="repo-card-container" onClick={handleClick}>
      <div className="repo-card">
        <h3 className="repo-name">{repo.name}</h3>
        <h5 className="visibility">{repo.visibility}</h5>
        <h5 className="last-updated">{repo.updated_at}</h5>
        <h5 className="language">{repo.language}</h5>
        <p className="description">{repo.description}</p>
        <NavLink to="/" className="btn" onClick={handleViewClick}>
          <button className="view-btn">View</button>
        </NavLink>
      </div>
    </div>
  );
};

export default RepoCard;
