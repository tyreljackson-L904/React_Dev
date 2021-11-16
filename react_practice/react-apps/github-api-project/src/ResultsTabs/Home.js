import React from "react";

const Home = ({ title, onClick }) => {
  return (
    <div className="home-container">
      <div className="title" onClick={onClick}>
        {title}
      </div>
      <div className="main-content">
        <p>Home</p>
      </div>
    </div>
  );
};

export default Home;
