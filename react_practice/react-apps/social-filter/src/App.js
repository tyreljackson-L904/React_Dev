import React from "react";
import "./App.css";
import Header from "./Header.js";
import SearchBar from "./SearchBar.js";
import Grid from "./Grid.js";

function App() {
  const title = "Search Filter";
  const handleClick = () => {};

  return (
    <div className="App">
      <div className="container">
        <Header children={title} />
        <SearchBar onClick={handleClick} />
        <Grid />
      </div>
    </div>
  );
}

export default App;
