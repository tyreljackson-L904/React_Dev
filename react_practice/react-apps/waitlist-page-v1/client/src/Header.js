import React from "react";
import { SocialIcon } from "react-social-icons";
import influencer from "./images/instagram_influencer.png";

function Header() {
  return (
    <div className="cta-header">
      <h2 className="cta-tagline">
        <span className="hover-definition">Search.</span>{" "}
        <span className="hover-definition">Shop.</span>{" "}
        <span className="hover-definition">Save.</span> <br /> with{" "}
        <span className="creators-color">Creators</span>
      </h2>
      <div className="social-icons">
        <SocialIcon network="instagram" bgColor="#000" className="icon" />
        <SocialIcon network="tiktok" bgColor="#000" className="icon" />
        <SocialIcon network="youtube" bgColor="#000" className="icon" />
        <SocialIcon network="twitter" bgColor="#000" className="icon" />
        <SocialIcon network="snapchat" bgColor="#000" className="icon" />
        <SocialIcon network="facebook" bgColor="#000" className="icon" />
      </div>
      <img src={influencer} alt="insta influencer" className="influencer" />
    </div>
  );
}

export default Header;
