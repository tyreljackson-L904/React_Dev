import React from "react";
import "../src/Home.css";
import ShoppingMenu from "./components/ShoppingMenu";
import FilterResults from "./FilterResults";
import HomeBanner from "./components/HomeBanner";
import HomeSearchBar from "./components/HomeSearchBar";
import Card from "./components/Card";
import { data } from "./MockData.js";

function Home({ values }) {
  return (
    <div className="main-container">
      {/* <div className="left-content">
        <ShoppingMenu />
      </div> */}
      <div className="right-content">
        <HomeBanner />
        <div className="search-filter-content">
          <HomeSearchBar />
          <FilterResults />
        </div>
        <div className="search-results">
          {/* <button>Click Me</button> */}
          {data.map((creator, index) => {
            return (
              <ul className="search-list">
                <li className="list-item" key={index}>
                  <Card
                    avatar={creator.avatar}
                    fName={creator.first_name}
                    lName={creator.last_name}
                  />
                </li>
              </ul>
            );
          })}
        </div>
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
