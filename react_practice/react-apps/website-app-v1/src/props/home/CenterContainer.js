import { PrimaryButton } from "../Buttons";
import Card from "./Card";

function CenterContainer() {
  return (
    <div className="main-center-container">
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
      <div className="sv-header">
        <h3 className="sv-title">Recent</h3>
        <h5 className="sv-see-more">See More {">"}</h5>
      </div>
      <div className="recent">
        <Card className="scroll-card" />
        <Card className="scroll-card" />
        <Card className="scroll-card" />
        <Card className="scroll-card" />
        <Card className="scroll-card" />
      </div>
    </div>
  );
}

export default CenterContainer;
