import React, { useState } from "react";
import "../css/dropdown.css";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import DropdownList from "./DropdownList";

function Dropdown(props) {
  const [listItem, setListItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const selectItem = (value) => {
    setListItem(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleMenu}>
        <div className="dropdown-btn">{listItem || "Select Item"}</div>
        <div className="dropdown-arrow">
          <span> {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          <DropdownList onSelect={selectItem} />
        </div>
      )}
    </div>
  );
}

export default Dropdown;
