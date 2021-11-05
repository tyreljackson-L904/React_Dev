import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Grid from "./Grid";

function App() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState([]);

  const title = "Pokemon Trainer";
  const btnTitle = "Search Digimon";

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    setInput(e.target.value);
  };

  const getDigimon = async () => {
    const res = await fetch(`https://digimon-api.vercel.app/api/digimon`);
    const data = await res.json();
    setSearch(data);
  };

  useEffect(() => {
    getDigimon();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header children={title} />
        <SearchBar
          value={input}
          onChange={handleChange}
          btnTitle={btnTitle}
          onClick={handleClick}
        />
        <Grid data={search} input={input}/>
      </div>
    </div>
  );
}

export default App;
