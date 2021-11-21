import React, { useState } from "react";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
import ResultsTabs from "./ResultsTabs";

// const axios = require("axios");

function App() {
  const [value, setValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const getUserData = async () => {
    try {
      const url = `https://api.github.com/users/${value}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      });
      const data = await response.json();

      setSearchResult(data);
      // setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  // useEffect(() => {
  //   getUserData();
  // }, [user]);

  return (
    <div className="App">
      <Header />
      <Search value={value} onChange={handleChange} onClick={getUserData} />
      <ResultsTabs searchResult={searchResult} />
    </div>
  );
}

export default App;
