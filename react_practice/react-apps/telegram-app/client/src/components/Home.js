import React from "react";

const Home = () => {
  return (
    <div className="home__main-container">
      <div className="home__left__channel-list-container">
        <div className="home__left__search">Search</div>
        <div className="home__left__channel-list">Channel Listss</div>
      </div>
      <div className="home__right__channel-content-container">
        <div className="home__right__channel-1">Channel 1</div>
        <div className="home__right__channel-2">Channel 2</div>
        <div className="home__right__channel-3">Channel 3</div>
      </div>
    </div>
  );
};

export default Home;
