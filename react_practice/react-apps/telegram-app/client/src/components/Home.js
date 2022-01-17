import React, { useState } from "react";
import "../styles/Home.css";
import Search from "./Search";
import Channel from "./Channel";

const Home = () => {
  const [query, setQuery] = useState("");
  const [channelList, setChannelList] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="home__main-container">
      <div className="home__left__channel-list-container">
        <div className="home__left__search">
          <Search onChange={handleChange} value={query} />
        </div>
        <div className="home__left__channel-list">
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
          <Channel />
        </div>
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
