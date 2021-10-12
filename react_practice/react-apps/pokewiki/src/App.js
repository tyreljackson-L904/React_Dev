import React from "react";
import "./App.css";
import Header from "./Header";
import FetchPokeData from "./FetchPokeData";
import PokeGrid from "./PokeGrid";

function App() {
  const fetchPokemons = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
    const data = await response.json();
    console.log(data);
    return data;
  };

  return (
    <div className="App">
      <Header />
      <FetchPokeData fetchPokemons={fetchPokemons} />
      <PokeGrid fetchPokemons={fetchPokemons.data} />
    </div>
  );
}

export default App;
