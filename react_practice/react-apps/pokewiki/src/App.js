import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import PokeGrid from "./PokeGrid";
import PokemonDetail from "./Pokemondetail";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);

  const fetchPokemon = async (page) => {
    const perPage = 8;
    const offset = page * perPage - perPage;

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
    );
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
    fetchPokemon(page);
  }, [page]);

  const selectPokemon = (pokemon) => {
    setSelected(pokemon);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <PokeGrid
              data={pokemons}
              onSelect={selectPokemon}
              onClickPrevious={() => setPage(Math.max(page - 1, 1))}
              onClickNext={() => setPage(page + 1)}
            />
          </Route>
          <Route path="/pokemondetail/:pokemonName">
            <PokemonDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
