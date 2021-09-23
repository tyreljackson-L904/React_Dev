import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">
          <span>Pro</span>Code
        </h1>
      </div>
      <div className="main-content">
        <div className="cta-header">
          <h2 className="cta-tagline">
            Search. Shop. Save.
            <br /> with <span>Influencers</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
