import React from "react";
import "../styles/Home.css";
import Products from "./products/Products";


const Home = ({products}) => {

  return (
    <div className="home__container">
      <Products products={products}/>
    </div>
  );
};

export default Home;
