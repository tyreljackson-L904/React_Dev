import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import {
  Home,
  BestSellers,
  UnderThirty,
  Reviews,
  ShoppingCart,
} from "../components";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { MenuItems } from "./MenuItems";

import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const mobileNavMenuIcons = (
    <>
      <AiOutlineShoppingCart
        className="navbar__shopping-cart-icon"
        size={35}
        onClick={() => {}}
      />
      <AiOutlineMenu
        className="hamburger-navbar_icon "
        size={20}
        onClick={closeMobileMenu}
      />
    </>
  );
  return (
    <div>
      <div className="navbar">
        <h3 className="navbar__title">All You Need</h3>
        <div>
          <ul className={isOpen ? "navbar__menu active" : "navbar__menu"}>
            {MenuItems.map((item, idx) => {
              return (
                <li key={idx}>
                  <Link
                    to={item.url}
                    className={item.cName}
                    onClick={closeMobileMenu}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <AiOutlineShoppingCart
              className="navbar__shopping-cart-icon"
              size={35}
              onClick={() => {}}
            />
            <Link to="login" className="navbar__login-btn mobile">
              <button className="login-btn">Login</button>
            </Link>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {isOpen ? (
              <AiOutlineClose
                className="hamburger-navbar_icon"
                size={20}
                onClick={closeMobileMenu}
              />
            ) : (
              mobileNavMenuIcons
            )}
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

  // if (isOpen) {
  //   return <MobileNav onClick={selectItem} setIsOpen={!isOpen} />;
  // }

  // return <DesktopNav onClick={selectItem} />;
};

export default Navbar;
