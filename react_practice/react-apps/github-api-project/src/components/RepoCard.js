import React from "react";

const RepoCard = ({ repo }) => {
  console.log(repo);

  const handleClick = () => {};
  return (
    <div className="card-container" onClick={handleClick}>
      <div className="main-info">
        <h3 className="repo-name">{repo.name}</h3>
        <h5 className="visibility">{repo.visibility}</h5>
      </div>
      <h5 className="last-updated">{repo.updated_at}</h5>
      <h5 className="language">JavaScript</h5>
      <p className="description">{repo.description}</p>
    </div>
  );
};

export default RepoCard;
