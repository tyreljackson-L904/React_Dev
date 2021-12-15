import React, { useState } from "react";
import "./Card.css";
import { FaSearchDollar } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import InfoPopUp from "./InfoPopUp";

function Card() {
  const [popUp, setPopUp] = useState(false);

  const showPopUp = () => {
    setPopUp(true);
  };

  return (
    <div className="card-container">
      <div className="card">
        <FaSearchDollar size={"70"} />
        <h3 className="search-card">Search</h3>
        <h4 className="search-description">
          all your favorite <span>creators</span> from the platforms they love
        </h4>
        <button className="learn-more" onClick={showPopUp}>
          Learn More
          {popUp && <InfoPopUp />}
        </button>
      </div>
      <div className="card">
        <GiShoppingBag size={"70"} />
        <h3 className="shop-card">Shop</h3>
        <h4 className="shop-description">
          all the <span>brands</span> they work with, the products you want
        </h4>
        <button className="learn-more" onClick={showPopUp}>
          Learn More
          {popUp && <InfoPopUp />}
        </button>
      </div>
      <div className="card">
        <GiReceiveMoney size={"70"} />
        <h3 className="save-card">Save</h3>
        <h4 className="save-description">
          big on your all your favorite <span>products</span>
        </h4>
        <button className="learn-more" onClick={showPopUp}>
          Learn More
          {popUp && <InfoPopUp />}
        </button>
      </div>
    </div>
  );
}

export default Card;
