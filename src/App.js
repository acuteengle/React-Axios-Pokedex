import React, { useState } from "react";
import axios from 'axios';
import PokemonData from "./components/PokemonData";

function App() {

  const [search, setSearch] = useState("");

  const [error, setError] = useState("");

  const [pokemon, setPokemon] = useState(null);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const searchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/" + search.toLowerCase())
    .then(res => {
      setError("");
      const data = res.data;
      console.log(data);
      setPokemon(data); 
    })
    .catch(err => {
      console.log(err);
      setError("No Results");
      setPokemon("");
    });
  }

  return (
    <div className="App">
      <input onChange={handleSearch}></input>
      <button onClick={searchPokemon}>Search Pokemon</button>
      {error && <p>{error}</p>}
      {pokemon && <PokemonData pokemon={pokemon}/>}
    </div>
  );
}

export default App;
