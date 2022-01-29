import React from "react";
import "../styles/Navbar.css";
import { Link, Routes, Route } from "react-router-dom";
import BestSellers from "./BestSellers";
import Home from "./Home";
import UnderThirty from "./UnderThirty";
import Reviews from "./Reviews";
import ShoppingCart from "./ShoppingCart";
import {AiOutlineShoppingCart} from 'react-icons/ai'

const DesktopNav = ({onClick}) => {
  return (
    <div>
      <div className="navbar">
        <h3 className="navbar__title">Rebel Republic</h3>
        <div>
          <div className="navbar__menu">
            <ul>
              <li>
                <Link to="/" className="navbar__link" onClick={onClick}>
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="bestsellers"
                  className="navbar__link"
                  onClick={onClick}
                >
                  BEST SELLERS
                </Link>
              </li>
              <li>
                <Link
                  to="underthirty"
                  className="navbar__link"
                  onClick={onClick}
                >
                  UNDER $30
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  className="navbar__link"
                  onClick={onClick}
                >
                  REVIEWS
                </Link>
              </li>
            </ul>
            <AiOutlineShoppingCart
              className="navbar__shopping-cart-icon"
              size={35}
              onClick={onClick}
            />
            <Link to="shoppingcart" className="navbar__login-btn">
              <button className="login-btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="bestsellers" element={<BestSellers />} />
          <Route path="underthirty" element={<UnderThirty />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="shoppingcart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </div>
  );
};

export default DesktopNav;
