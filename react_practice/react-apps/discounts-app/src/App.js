import React, { useState, useEffect } from "react";
import axios from "axios";
// import { BrowserRouter as Router, Switch, Route } from "react-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home";
// import FilterResults from "./FilterResults";

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults();
  }, []);

  const getResults = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/person`);
      setResults(response.data.person);
      console.log(results);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      {/* <FilterResults /> */}
      <Home values={getResults} />
    </>
  );
}

export default App;
