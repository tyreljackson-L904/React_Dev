// import React, { useState } from "react";
import "./Home.css";
import Header from "./Header";
import CTAForm from "./CTAForm";
import Card from "./Card";

function Home() {
  return (
    <div className="gray-background">
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
        {/* <h1 className="card-header">As Easy As...</h1> */}
        {/* <Card /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
