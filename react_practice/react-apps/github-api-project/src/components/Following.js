import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FollowingCard from "../components/FollowingCard";

const Following = () => {
  const [followingList, setFollowingList] = useState([]);
  const { login } = useParams();

  useEffect(() => {
    const getFollowing = async () => {
      try {
        const url = `https://api.github.com/users/${login}/following`;
        const response = await fetch(url, {
          headers: {
            Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        });
        const data = await response.json();
        setFollowingList(data);
      } catch (err) {
        console.error(err);
      }
    };
    getFollowing();
  }, [login]);

  const getUserCard = () => {};

  return (
    <div className="followers-container">
      <div className="main-content">
        <p>
          {followingList.map((user, index) => {
            return (
              <ul className="follower-list">
                <FollowingCard
                  key={index}
                  user={user}
                  onCardClick={getUserCard}
                />
              </ul>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Following;
