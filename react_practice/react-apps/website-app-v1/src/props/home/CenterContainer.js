import React from "react";
import { PrimaryButton } from "../Buttons";

function CenterContainer() {
  return (
    <div className="image-container">
      <div className="header-container">
        <h1 className="header">
          Connecting Engineering Interns <span> & </span> Growing Community
        </h1>
        <h4 className="sub-heading">
          WeeCode seeks to bring together a beneficial community for aspiring
          engineers who are seeking to make conenctions across the globe.
        </h4>
        <div className="primary-btn">
          <PrimaryButton title="Create Account" className="primary-btn" />
        </div>
      </div>
    </div>
  );
}

export default CenterContainer;
