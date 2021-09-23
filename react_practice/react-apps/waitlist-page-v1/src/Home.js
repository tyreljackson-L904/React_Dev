import React from "react";
import "./Home.css";
import PrimaryButton from "./PrimaryBtn";
import twitter from "./images/twitter.png";
import youtube from "./images/youtube.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import snapchat from "./images/snapchat.png";

function Home() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h2 className="page-title">
          <span>Pro</span>Code
        </h2>
      </div>
      <div className="main-content">
        <div className="cta-header">
          <h2 className="cta-tagline">
            Search. Shop. Save. <br /> with <span>Creators</span>
          </h2>
          <div className="images">
            <img src={twitter} alt="twitter" />
            <img src={youtube} alt="twitter" />
            <img src={facebook} alt="twitter" />
            <img src={instagram} alt="twitter" />
            <img src={snapchat} alt="twitter" />
          </div>
        </div>
        <div className="cta-form">
          <form action="">
            <h2 className="cta-join-header">Join The Waitlist</h2>
            <p className="cta-description">
              Be part of the first group of people to join the only product
              search site built around allowing you to easily find the best
              prices on all your favorite products using creator discount codes
              form your favorite platforms.
            </p>
            {/* <h4 className="cta-search">
              <span>Search</span> all your favorite creators from the social
              platforms they love
            </h4>
            <h4 className="cta-shop">
              <span>Shop</span> all the brands they work with
            </h4>
            <h4 className="cta-save">
              <span>Save</span> big on all your favorite products
            </h4> */}
            <input
              type="text"
              size="35"
              placeholder="Email Address"
              className="cta-form-email"
            />
            <PrimaryButton title="Join the waitlist" className="cta-form-btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
