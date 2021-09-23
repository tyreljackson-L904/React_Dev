import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home";
import FilterResults from "./FilterResults";

function App() {
  return (
    <>
      <Navbar />
      {/* <FilterResults /> */}
      <Home />
    </>
  );
}

export default App;
