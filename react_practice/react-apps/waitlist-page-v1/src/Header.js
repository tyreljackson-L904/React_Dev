import React, { useState } from "react";
import InfoPopUp from "./InfoPopUp";
import { SocialIcon } from "react-social-icons";

function Header() {
  const [popUp, setPopUp] = useState(false);

  const showPopUp = () => {
    setPopUp(!popUp);
  };

  return (
    <div className="cta-header">
      <h2 className="cta-tagline">
        <span className="hover-definition" onClick={showPopUp}>
          Search.
          {popUp && <InfoPopUp />}
        </span>{" "}
        <span className="hover-definition" onClick={showPopUp}>
          Shop. {popUp && <InfoPopUp />}
        </span>{" "}
        <span className="hover-definition" onClick={showPopUp}>
          Save. {popUp && <InfoPopUp />}
        </span>{" "}
        <br /> with <span className="creators-color">Creators</span>
      </h2>
      <div className="social-icons">
        <SocialIcon network="instagram" bgColor="#000" className="icon" />
        <SocialIcon network="tiktok" bgColor="#000" className="icon" />
        <SocialIcon network="youtube" bgColor="#000" className="icon" />
        <SocialIcon network="twitter" bgColor="#000" className="icon" />
        <SocialIcon network="snapchat" bgColor="#000" className="icon" />
        <SocialIcon network="facebook" bgColor="#000" className="icon" />
      </div>
      {/* <button className="learn-more" onClick={showPopUp}>
        Learn More
        {popUp && <InfoPopUp />}
      </button> */}
    </div>
  );
}

export default Header;
