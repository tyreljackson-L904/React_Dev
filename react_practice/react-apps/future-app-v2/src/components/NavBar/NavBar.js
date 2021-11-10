import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <h2 className="nav__title">
          <span>Pro</span>Code
        </h2>
        <ul className="nav__links">
          <li className="nav__item">Search</li>
          <li className="nav__item">Browse</li>
        </ul>
        <div className="right__nav shopping__cart">
          <HiOutlineShoppingCart size={20} />
        </div>
        <div className="right__nav user__img__menu">
          <FaRegUserCircle size={30} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
