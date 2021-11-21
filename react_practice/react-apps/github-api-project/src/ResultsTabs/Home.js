import React from "react";
import UserCard from "../UserCard";
// import { useParams } from "react-router-dom";

const Home = ({ searchResult, onClick, title }) => {
  console.log(searchResult);

  // const user = searchResult;

  return (
    <div className="home-container">
      {/* <div className="title" onClick={onClick}>
        {title}
      </div> */}
      <div className="main-content">
        <UserCard user={searchResult} />
      </div>
    </div>
  );
};

export default Home;
