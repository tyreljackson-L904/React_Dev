import React, { useState, useEffect } from "react";
import "../src/styles/App.css";
import Home from "./components/pages/Home";
import { Routes, Route, Outlet } from "react-router";
import Navbar from "./components/Navbar";
import {
  BestSellers,
  UnderThirty,
  Reviews,
  ShoppingCart,
} from "./components/index";
import Login from "./components/Login/Login";
import { commerce } from "./lib/commerce";
import Products from "./components/products/Products";
import ProductDetails from "./components/products/ProductDetails";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [selected, setSelected] = useState(null);

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSelected = (product) => {
    setSelected(product);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div className="App">
      <Navbar totalItems={cart.total_items} />
      <Routes>
        <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart} onSelected={onSelected} />} />
        <Route path="/productdetails/:productId" element={<ProductDetails onAddToCart={handleAddToCart} />} />
        <Route path="bestsellers" element={<BestSellers />} />
        <Route path="underthirty" element={<UnderThirty />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="shoppingcart" element={<ShoppingCart cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
