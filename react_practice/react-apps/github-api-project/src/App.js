import React, { useState } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import ResultsTabs from "./components/ResultsTabs";
import NavBar from "./components/Navbar";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [value, setValue] = useState("");
  let navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const getUserData = () => {
    navigate(`/${value}`);
  };

  return (
    <div className="App">
      <NavBar />
      <Header />
      <Search value={value} onChange={handleChange} onClick={getUserData} />
      <Routes>
        <Route path="/:login/*" element={<ResultsTabs />} />
      </Routes>
    </div>
  );
};

export default App;
