import "./Home.css";
import Header from "./Header";
import CTAForm from "./CTAForm";
import FeatureSection from "./FeatureSection";

function Home() {
  return (
    <div className="main-container">
      <div className="main">
        <div className="page-container">
          <div className="page-header">
            <h1 className="page-title">
              <span>Pro</span>Code
            </h1>
          </div>
          <div className="main-content">
            <Header />
            <CTAForm />
          </div>
        </div>
        <div className="features-container">
          <FeatureSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
