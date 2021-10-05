import React from "react";
import "../src/Home.css";
import ShoppingMenu from "./components/ShoppingMenu";
import FilterResults from "./FilterResults";
import HomeBanner from "./components/HomeBanner";
import HomeSearchBar from "./components/HomeSearchBar";
import Card from "./components/Card";

function Home() {
  return (
    <div className="main-container">
      <div className="left-content">
        <ShoppingMenu />
      </div>
      <div className="right-content">
        <HomeBanner />
        <div className="search-filter-content">
          <HomeSearchBar />
          <FilterResults />
        </div>
        <Card />
      </div>
    </div>
  );
}

export default Home;

{
  /* <div className="home-highlight-banner">
        <h1 className="banner-text">
          Search. Shop. Save. With <span>Influencers</span>
        </h1>
      </div> */
}

{
  /* <div className="cta-start-shopping">
          <h4 className="cta-header">Sign Up</h4>
        </div>
        <ShoppingMenu /> */
}
