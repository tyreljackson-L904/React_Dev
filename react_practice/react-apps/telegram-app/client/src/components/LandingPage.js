import React from "react";
import "../styles/LandingPage.css";
import telegramIcon from "../images/pngegg.png";
import Button from "../reusables/Button";

const LandingPage = () => {
  return (
    <div className="landing-page__container">
      <img
        className="landing-page__telegram-image"
        src={telegramIcon}
        alt="telegram icon"
        width="200px"
      />
      <h1 className="landing-page__headline">Tele-Wall</h1>
      <h4 className="landing-page__subheader">
        View and interact with up to three Telegram channels at once.
      </h4>
      <Button children="Get Started" />
    </div>
  );
};

export default LandingPage;
