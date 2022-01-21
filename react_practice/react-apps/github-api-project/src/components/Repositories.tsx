import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RepoCard from "./RepoCard";
import "../styles/Repositories.css";

const Repos = () => {
  const { login } = useParams();
  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    const getUserRepos = async () => {
      try {
        const url = `https://api.github.com/users/${login}/repos`;
        const response = await fetch(url, {
          headers: {
            Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        });
        const data = await response.json();

        setRepoList(data);
      } catch (err) {
        console.error(err);
      }
    };
    getUserRepos();
  }, [login]);

  return (
    <div className="repo-container">
      <div className="main-content">
        <table className="repo-header">
          <tr>
            <th className="header-item">Name</th>
            <th className="header-item">Language</th>
            <th className="header-item">Description</th>
            <th className="header-item">Profile</th>
          </tr>
        </table>
        <ul className="repo-list">
          {repoList.map((repo, index) => {
            return <RepoCard repo={repo} key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Repos;
