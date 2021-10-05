import { useState } from "react";
import Dropdown from "./Dropdown";
import "../css/Dropdown.css";

function ShoppingMenu() {
  const [value, setValue] = useState("Search");

  const handleKeyPress = (e) => {
    if (e.keycode === 46) {
      setValue("");
    } else if (e.keycode === 13) {
      handleChange();
    }
  };
  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className="left-container">
      <div className="containter-content">
        <h3 className="container-header">Shopping Options</h3>
        {/* <div className="search-container">
          <input
            type="text"
            size={"40"}
            className="search-content"
            placeholder={value}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </div> */}
        <Dropdown
          header="Categories"
          data={[
            "Books",
            "Electronics",
            "Music/Gear",
            "Cameras",
            "Recording Equipment",
            "Computers",
            "Smart Home",
            "Home, Garden & Tools",
            "Pet Supplies",
            "Beauty & Health",
          ]}
        />
        <Dropdown
          header="Tags"
          data={[
            "#books",
            "#electronics",
            "#apple",
            "#nike",
            "#rolex",
            "#pets",
          ]}
        />
        <Dropdown
          header="Price"
          data={[
            "$0 - $49",
            "$50 - $99",
            "$100 - $249",
            "$250 - $299",
            "$251 - $499",
            "$500 - $999",
            "$1000 - $1499",
          ]}
        />
      </div>
    </div>
  );
}

export default ShoppingMenu;
