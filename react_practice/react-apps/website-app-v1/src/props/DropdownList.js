import React from "react";
import "../css/dropdown.css";

const DropdownList = (props) => {
  let listItems = [];

  return listItems.map((item) => {
    const handleClick = () => {
      props.onSelect(item);
    };

    return (
      <li className="dropdown-item" onClick={handleClick}>
        {props.item}
      </li>
    );
  });
};

export default DropdownList;
