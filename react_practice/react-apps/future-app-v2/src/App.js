import "./App.css";
import { BrowserRouter as Routes, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <div className="App">
      <div className="nav__bar">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
