import React from "react";
import "./InfoPopUp.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function InfoPopUp(props) {
  const closePopUp = (props) => console.log(!props.popUp);

  return (
    <div className="pop-up-container">
      <div className="pop-up-content">
        <h5 className="pop-up-description">
          <span>Search</span> the largest selection of creators, all with their
          own stores on our platforms providing you with the best brand
          discounts anywhere.
        </h5>
        {/* <h5 className="pop-up-description">
          <span>Shop</span> all your favorite products from your favorite
          brands.
        </h5>
        <h5 className="pop-up-description">
          <span>Save</span> using the best creator discount codes available
          anywhere.
        </h5> */}
      </div>
      <AiOutlineCloseCircle
        className="close-btn"
        size={"24"}
        onClick={closePopUp}
      />
    </div>
  );
}

export default InfoPopUp;
