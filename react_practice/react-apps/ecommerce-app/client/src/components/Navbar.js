import React, { useState } from "react";

import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";

import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selectItem = (value) => {
    // setListItem(value);
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    return <MobileNav onClick={selectItem} setIsOpen={isOpen} />;
  }

  return <DesktopNav onClick={selectItem} />;
};

export default Navbar;
