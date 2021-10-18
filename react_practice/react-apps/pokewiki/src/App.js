import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import PokeGrid from "./PokeGrid";
import PokemonDetail from "./Pokemondetail";

function App(props) {
  const [pokemons, setPokemons] = useState([]);

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
  console.log(props);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <PokeGrid data={pokemons} />
          </Route>
          {props.callback && (
            <Route to="/pokemondetail" pokemon={props.value}>
              <PokemonDetail />
            </Route>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
