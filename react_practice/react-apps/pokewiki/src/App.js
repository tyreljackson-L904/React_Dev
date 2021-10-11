import "./App.css";
import Header from "./Header";
import FetchPokeData from "./FetchPokeData";
import PokeGrid from "./PokeGrid";

function App() {
  return (
    <div className="App">
      <Header />
      <FetchPokeData />
      <PokeGrid />
    </div>
  );
}

export default App;
