import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import PokeGrid from "./PokeGrid";
import PokemonDetail from "./Pokemondetail";
import SearchPokemon from "./SearchPokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`);
    const data = await response.json();

    const pokemonData = await Promise.all(
      data.results.map(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        return response.json();
      })
    );

    setPokemons(pokemonData);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const selectPokemon = (pokemon) => {
    setSelected(pokemon);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <PokeGrid data={pokemons} onSelect={selectPokemon} />
          </Route>
          <Route path="/pokemondetail">
            <PokemonDetail pokemon={selected} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
