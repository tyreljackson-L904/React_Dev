import React from "react";
import "../src/Home.css";
import ShoppingMenu from "./components/ShoppingMenu";

function Home() {
  return (
    <div className="home-content-container">
      <div className="home-highlight-banner">
        <h1 className="banner-text">
          Search. Shop. Save. With <span>Influencers</span>
        </h1>
      </div>
      <div className="main-content">
        <div className="cta-start-shopping">
          <h4 className="cta-header">Sign Up</h4>
        </div>
        {/* <ShoppingMenu />
        <div className="right-container">
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
          <h1>Main Content</h1>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
