import React, { useState, useEffect } from "react";
import FollowerCard from "./FollowerCard";
import "../styles/Followers.css";
import { useParams } from "react-router-dom";
import { UserType } from "../types/UserTypes";

const Followers = () => {
  const [followers, setFollowers] = useState<UserType[]>([]);
  const { login } = useParams();

  useEffect(() => {
    const getFollowers = async () => {
      try {
        const url = `https://api.github.com/users/${login}/followers`;
        const response = await fetch(url, {
          headers: {
            Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        });
        const data: UserType[] = await response.json();

        setFollowers(data);
      } catch (err) {
        console.error(err);
      }
    };
    getFollowers();
  }, [login]);

  return (
    <div className="followers-container">
      <div className="main-content">
        {followers.map((user, index) => {
          return (
            <ul className="follower-list">
              <FollowerCard key={index} user={user} />
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Followers;
