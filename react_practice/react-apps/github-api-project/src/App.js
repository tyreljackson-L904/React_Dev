import React, { useState } from "react";
import "./styles/App.css";
import { Routes, Route, useMatch } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import ResultsTabs from "./components/ResultsTabs";
import NavBar from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  const match = useMatch("/:login/*");
  const [value, setValue] = useState(match?.params.login || "");
  const [loggedIn, setLoggedIn] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const getUserData = () => {
    navigate(`/${value}`);
  };

  console.log(match);

  if (loggedIn) {
    return <Login />;
  } else {
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
  }
};

export default App;
