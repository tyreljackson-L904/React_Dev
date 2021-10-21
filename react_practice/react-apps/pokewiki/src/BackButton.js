import React from "react";
import { useHistory } from "react-router-dom";
import "./BackButton.css";

const BackButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };
  return (
    <div className="button">
      <button className="back-btn" onClick={handleClick} path="/">
        {"<"} Back
      </button>
    </div>
  );
};

export default BackButton;
