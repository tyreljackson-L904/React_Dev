import React, { useState, useEffect } from "react";
import FollowerCard from "../FollowerCard";
import "./Followers.css";
import { useParams } from "react-router-dom";

const Followers = ({ title, onClick, onCardClick }) => {
  const [selectedProfile, setSelectedProfile] = useState("");
  const [newProfile, setNewProfile] = useState([]);
  const [followers, setFollowers] = useState([]);
  const { login } = useParams();

  // const handleFollowClick = (follower) => {
  //   console.log(follower);
  //   setSelectedProfile(follower);
  //   getFollowerCard(selectedProfile);
  // };

  useEffect(() => {
    const getFollowers = async () => {
      try {
        const url = `https://api.github.com/users/${login}/followers`;
        const response = await fetch(url, {
          headers: {
            Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        });
        const data = await response.json();

        setFollowers(data);
        // setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    getFollowers();
  }, [login]);

  const getFollowerCard = async () => {
    const login = selectedProfile.login;
    try {
      const url = `https://api.github.com/users/${login}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      });
      const data = await response.json();

      setNewProfile(data);
      console.log(newProfile);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="followers-container">
      <div className="title" onClick={onClick}>
        {title}
      </div>
      <div className="main-content">
        {followers.map((follower, index) => {
          return (
            <ul className="follower-list">
              <FollowerCard
                key={index}
                follower={follower}
                onCardClick={getFollowerCard}
              />
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Followers;
