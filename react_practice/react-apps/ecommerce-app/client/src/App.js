import "../src/styles/App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import BestSellers from "./components/BestSellers";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="home" element={<Home />} />
          <Route path="bestsellers" element={<BestSellers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
