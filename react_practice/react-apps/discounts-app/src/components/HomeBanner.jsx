import React from "react";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="container">
      <div className="cta">
        <h1>Search</h1>
        <h1>Shop</h1>
        <h1>Save</h1>
        {/* <h1>with</h1>
      <h1>
        <span className="cta-highlight">Creators</span>
      </h1> */}
      </div>
      <div className="cta-new-line">
        <h1>Creators</h1>
      </div>
    </div>
  );
};

export default HomeBanner;
