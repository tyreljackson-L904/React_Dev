import React from "react";
import bitcoin from "../images/bitcoin.jpeg";
import "../styles/Channel.css";

const Channel = () => {
  return (
    <div className="channel-list__container">
      <div className="channel-container">
        <div className="channel-container__image">
          <img
            className="channel-image"
            src={bitcoin}
            alt="channel-image"
            width="50px"
            height="50px"
          />
        </div>
        <div className="channel-container__right-info">
          <h4 className="channel-name">CryptoFanatiq</h4>
          <p className="channel__most-recent__message">
            Hey there, this is the last message
          </p>
        </div>
      </div>
    </div>
  );
};

export default Channel;
