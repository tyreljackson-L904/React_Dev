import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { useParams } from "react-router-dom";

type UserType = {
  html_url: string;
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: string;
  following: string;
  public_repos: string;
};

const getUser = async (login: string) => {
  const url = `https://api.github.com/users/${login}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });
  return (await response.json()) as UserType;
};

const Home = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const { login } = useParams();

  useEffect(() => {
    if (login) {
      getUser(login).then((user) => {
        setUser(user);
      });
    }
  }, [login]);

  return (
    <div className="home-container">
      <div className="main-content">{user && <UserCard user={user} />}</div>
    </div>
  );
};

export default Home;
