import { useState } from "react";
import "./App.css";
// import { Router, Route, Link } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
import DisplayResults from "./DisplayResults";

const axios = require("axios");

function App() {
  const [value, setValue] = useState("");
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const getUserData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${value}`);
      const userData = await response.data;

      setUser(userData);
      console.log(userData);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <Header />
      <Search value={value} onChange={handleChange} onClick={getUserData} />
      <DisplayResults user={user} />
    </div>
  );
}

export default App;
