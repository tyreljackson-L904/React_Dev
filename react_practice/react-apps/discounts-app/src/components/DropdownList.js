import React from "react";
import "../css/Dropdown.css";

const DropdownList = (props) => {
  let listItems = props.data;

  return listItems.map((item) => {
    const handleClick = () => {
      props.onSelect(item);
    };

    return (
      <li className="dropdown-item" onClick={handleClick}>
        {item}
      </li>
    );
  });
};

export default DropdownList;
