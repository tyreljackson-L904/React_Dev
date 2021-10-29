import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import SearchBar from "./SearchBar.js";
import Grid from "./Grid.js";

function App() {
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState("");
  const handleClick = () => {};
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const title = "Search Filter";

  const getData = async () => {
    const res = await fetch();
    const data = await res.json();
    setSearchData(data);
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="App">
      <div className="container">
        <Header children={title} />
        <SearchBar
          value={input}
          onClick={handleClick}
          onChange={handleChange}
        />
        <Grid />
      </div>
    </div>
  );
}

export default App;
