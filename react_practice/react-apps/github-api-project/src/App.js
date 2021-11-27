import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
import ResultsTabs from "./ResultsTabs";
import NavBar from "./Nav/Navbar";
import { useNavigate } from "react-router-dom";
import Login from "./Login/Login";
import octocat from "./Octocat.png";

const App = () => {
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

  // if (localStorage.getItem("login")) {
  //   setLoggedIn(true);
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
  // } else if (loggedIn) {
  // return (
  //   <div className="App">
  //     <img
  //       src={octocat}
  //       alt=""
  //       className="octocat"
  //       width="250px"
  //       height="200px"
  //     />
  //     <NavBar />
  //     <Login />
  //   </div>
  // );
  //   }
};

export default App;
