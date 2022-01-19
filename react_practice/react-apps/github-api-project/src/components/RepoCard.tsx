import React from "react";
import "../styles/RepoCard.css";

type RepoProps = {
  name: string;
  updated_at: string;
  language: string;
  description: string;
  html_url: string;
};

type RepoType = {
  repo: RepoProps;
};

const RepoCard = ({ repo }: RepoType) => {
  const handleClick = () => {};
  return (
    <div className="repo-card-container" onClick={handleClick}>
      <div className="repo-card">
        <h3 className="repo-name">{repo.name}</h3>
        {/* <h5 className="visibility">{repo.visibility}</h5> */}
        <h5 className="last-updated">{repo.updated_at}</h5>
        <h5 className="language">{repo.language}</h5>
        <p className="description">{repo.description}</p>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          <button className="view-btn">View</button>
        </a>
      </div>
    </div>
  );
};

export default RepoCard;
