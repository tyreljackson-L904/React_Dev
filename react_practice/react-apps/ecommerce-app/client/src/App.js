import React, { useState, useEffect } from "react";
import "../src/styles/App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import { BestSellers, UnderThirty, Reviews } from "./components";
import Login from "./components/Login/Login";
import { commerce } from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();

      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar products={products} />}>
          <Route path="home" element={<Home />} />
          <Route path="bestsellers" element={<BestSellers />} />
          <Route path="underthirty" element={<UnderThirty />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
