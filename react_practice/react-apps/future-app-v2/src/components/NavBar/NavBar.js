import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (

      <nav className="navbar">
        <Link to="/" className="nav__title">
          <h2>
            <span>Pro</span>Code
          </h2>
        </Link>
        <ul className="nav__links">
          <Link to="/Search" className="nav__item active">
            Search
          </Link>
          <Link to="/Browse" className="nav__item active">
            Browse
          </Link>
        </ul>
        <div className="right__nav__container">
          <Link to="/shoppingcart" className="right__nav shopping__cart">
            <HiOutlineShoppingCart size={20} />
          </Link>
          <Link to="/:userprofilemenu" className="right__nav user__img__menu">
            <FaRegUserCircle size={30} />
          </Link>
        </div>
      </nav>

  );
};

export default NavBar;
