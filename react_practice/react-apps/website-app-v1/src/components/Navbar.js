import React, { useState } from "react";
import "../css/Navbar.css";
import { BrowserRouter as Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import { MenuLinks } from "./MenuElements";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackround = () => {
    if (window.scrollY >= 24) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackround);
  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div
        className={
          navbar ? "nav-left navbar-title active" : "nav-left navbar-title"
        }
      >
        <Link to="/">Wee{"{Code}"}</Link>
      </div>
      <div className={navbar ? "nav-center active" : "nav-center"}>
        <MenuLinks />
      </div>
      <div className="nav-right">
        <NavMenu />
      </div>
    </nav>
  );
}

export default Navbar;
