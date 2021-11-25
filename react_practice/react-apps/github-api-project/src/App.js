import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
import ResultsTabs from "./ResultsTabs";
import NavBar from "./Nav/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import Login from "./Login/Login";

function App() {
  const [value, setValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const getUserData = () => {
    navigate(`/${value}`);
  };

  if (!loggedIn) {
    return (
      <div className="App">
        <NavBar />
        <Login />
      </div>
    );
  } else {
    return (
      <div className="App">
        <NavBar />
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
}

export default App;
