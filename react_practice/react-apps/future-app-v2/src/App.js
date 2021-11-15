import "./App.css";
// import { BrowserRouter as Routes, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <NavBar />
      <UserProfile />
    </div>
  );
}

export default App;
