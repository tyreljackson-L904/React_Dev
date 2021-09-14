import React from "react";
import "../../css/home.css";
import CenterContainer from "../../props/home/CenterContainer";
import LeftContentMenu from "../../props/home/LeftContainer";
import LeftTagScrollView from "../../props/home/LeftTagScrollView";
import RightUserDataContainer from "../../props/home/RightUserDataContainer";

// import Dropdown from "../../props/Dropdown";
// import { PrimaryButton, SecondaryButton } from "../../props/Buttons";

function Home() {
  return (
    <div className="home-container">
      <div className="home-left-content">
        <LeftContentMenu />
        <LeftTagScrollView />
      </div>
      <div className="home-center-content">
        <CenterContainer />
      </div>
      <div className="home-right-content">
        <RightUserDataContainer />
      </div>
    </div>
  );
}

export default Home;
