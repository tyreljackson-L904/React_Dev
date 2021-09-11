import React from "react";
import "../../css/home.css";
import Dropdown from "../../props/Dropdown";
import { PrimaryButton, SecondaryButton } from "../../props/Buttons";

function Home() {
  return (
    <div className="home-container">
      {/* <div className="home-left-content">
        <span>Left</span>
      </div>
      <div className="home-center-content">Center</div>
      <div className="home-right-content">Right</div> */}
      <Dropdown dropdownLabel="Select Item" />
      <Dropdown dropdownLabel="Select Item" />
      <Dropdown dropdownLabel="Select Item" />
      <PrimaryButton title="Primary Btn" />
      <SecondaryButton title="Secondary Btn" />
    </div>
  );
}

export default Home;
