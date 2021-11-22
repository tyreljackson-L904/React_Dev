import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
import ResultsTabs from "./ResultsTabs";
import { useNavigate } from "react-router-dom";
// const axios = require("axios");

function App() {
  const [value, setValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const getUserData = () => {
    navigate(`/${value}`);
  };

  return (
    <div className="App">
      <Header />
      <Search value={value} onChange={handleChange} onClick={getUserData} />
      <Routes>
        <Route
          path="/:login/*"
          element={<ResultsTabs searchResult={searchResult} />}
        />
      </Routes>
    </div>
  );
}

export default App;
