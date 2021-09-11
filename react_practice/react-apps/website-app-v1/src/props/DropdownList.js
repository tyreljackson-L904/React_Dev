import React from "react";
import "../css/dropdown.css";

const DropdownList = (props) => {
  let listItems = ["Option 1", "Option 2", "Option 3", "Option 4"];

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
