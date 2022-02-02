import React, { useState, useEffect } from "react";
import "../src/styles/App.css";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import { BestSellers, UnderThirty, Reviews } from "./components/index";
import Login from "./components/Login/Login";
import { commerce } from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Navbar
              products={products}
              onAddToCart={handleAddToCart}
              totalItems={cart.total_items}
            />
          }
        >
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
