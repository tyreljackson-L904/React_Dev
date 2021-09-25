import "./Home.css";
import Header from "./Header";
import CTAForm from "./CTAForm";
import Card from "./Card";
import Footer from "./Footer";

function Home() {
  return (
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
      <h1 className="card-header">As Easy As...</h1>
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
