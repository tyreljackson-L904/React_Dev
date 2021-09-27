import React from "react";
import "./InfoPopUp.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function InfoPopUp(props) {
  return (
    <div className="pop-up-container">
      <div className="pop-up-content">
        <h5 className="pop-up-description">
          Search the largest selection of creators, all with their own stores on
          our platforms providing you with the best brand discounts anywhere.
        </h5>
      </div>
      <AiOutlineCloseCircle className="close-btn" />
    </div>
  );
}

export default InfoPopUp;
