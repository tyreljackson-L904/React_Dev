import React, { useState } from "react";
import "./SearchBar.css";
import { client } from "./API";
import "./API";

const SearchBar = () => {
  const [state, setState] = useState();
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const getHashtagSearchResults = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
    const data = await response.json();
    console.log(data);
  };

  console.log(getHashtagSearchResults());

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search Hashtags"
        onChange={handleChange}
        value={value}
      />
      <button className="search-btn" /*onClick={fetchData}*/>Search</button>
    </div>
  );
};

export default SearchBar;
