import React from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="box">
          <h1 className="title">Hashtag Search</h1>
          <SearchBar />
          <Results />
        </div>
      </div>
    </div>
  );
}

export default App;
