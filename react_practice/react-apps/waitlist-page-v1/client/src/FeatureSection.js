import React from "react";

const FeaturesSection = () => {
  return (
    <div className="center-features__container">
      <div className="center-features__headline">
        <h2 className="header">You want the best discount anywhere.</h2>
        <h4 className="sub-header">
          Procode has brought them to you to save you the most money
          <br />
          on your favorite products from all your favorite companies
          <br />
          from your favorite creators big and small.
        </h4>
      </div>
      <div className="center-features__feature-grid">
        <div className="feature-one">
          <img src="" alt="" className="logo" />
          <h3 className="feature-header">Feature 1</h3>
          <h4 className="feature-subheader">
            This is a feature subheader describing what you get with this
            feature
          </h4>
        </div>
        <div className="feature-two">
          <img src="" alt="" className="logo" />
          <h3 className="feature-header">Feature 1</h3>
          <h4 className="feature-subheader">
            This is a feature subheader describing what you get with this
            feature
          </h4>
        </div>
        <div className="feature-three">
          <img src="" alt="" className="logo" />
          <h3 className="feature-header">Feature 1</h3>
          <h4 className="feature-subheader">
            This is a feature subheader describing what you get with this
            feature
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
