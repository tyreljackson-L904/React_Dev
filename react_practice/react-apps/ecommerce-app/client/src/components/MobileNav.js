import React from "react";
import "../styles/Navbar.css";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { Link, Routes, Route } from "react-router-dom";
import BestSellers from "./BestSellers";
import Home from "./Home";
import UnderThirty from "./UnderThirty";
import Reviews from "./Reviews";
import ShoppingCart from "./ShoppingCart";

const MobileNav = ({isOpen, onClick }) => {

  return (
    <div>
      <div className="navbar">
        <h3 className="navbar__title">Rebel Republic</h3>
        <span>
          {isOpen ? (
            <AiOutlineClose
              className="hamburger-navbar_icon"
              size={20}
              onClick={onClick}
            />
          ) : (
            <AiOutlineMenu
              className="hamburger-navbar_icon "
              size={20}
              onClick={onClick}
            />
          )}
        </span>
        {isOpen && (
          <div className="navbar__menu overlay">
            <h3 className="mobile-navbar__title">Rebel Republic</h3>
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
        )}
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

export default MobileNav;
