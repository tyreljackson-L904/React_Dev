import React from "react";
import "./FeaturesSection.css";
import { AiOutlineSearch } from "react-icons/ai";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import collage from "./images/collage.jpeg";

const FeaturesSection = () => {
  return (
    <div className="center-features__container">
      <div className="center-features__card-container">
        <div className="center-features__headline">
          <h2 className="header">You want the best discount anywhere.</h2>
          <h4 className="sub-header">
            ProCode has brought them to you to save you the most money
            <br />
            on your favorite products from all your favorite companies
            <br />
            from your favorite creators big and small.
          </h4>
        </div>
        <div className="center-features__feature-grid">
          <div className="feature-one">
            <AiOutlineSearch className="logo" />
            <h3 className="feature-header">Search</h3>
            <h4 className="feature-subheader">
              Easily search for discounts based on brand, category or creator.
            </h4>
          </div>
          <div className="feature-two">
            <RiShoppingCart2Line className="logo" />
            <h3 className="feature-header">Shop</h3>
            <h4 className="feature-subheader">
              Simply click on the discount for it to be applied across the web
              on your favorite products.
            </h4>
          </div>
          <div className="feature-three">
            <GiTakeMyMoney className="logo" />
            <h3 className="feature-header">Save</h3>
            <h4 className="feature-subheader">
              Instantly save big on the most curated marketplace of products
              based soley on creators.
            </h4>
          </div>
        </div>
        <div className="features__second-container">
          <img src={collage} alt="brand collage" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
