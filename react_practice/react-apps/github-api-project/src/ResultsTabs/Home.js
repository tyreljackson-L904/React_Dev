import React, { useEffect, useState } from "react";
import UserCard from "../UserCard";
import { useParams } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);
  const { login } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const url = `https://api.github.com/users/${login}`;
        const response = await fetch(url, {
          headers: {
            Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        });
        const data = await response.json();

        setUser(data);
        // setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    getUser();
  }, [login]);

  return (
    <div className="home-container">
      <div className="main-content">{user && <UserCard user={user} />}</div>
    </div>
  );
};

export default Home;
