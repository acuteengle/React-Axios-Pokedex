import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonData from "./PokemonData";

const Pokedex = (props) => {
  const [search, setSearch] = useState("");

  const [error, setError] = useState("");

  const [pokemon, setPokemon] = useState(null);

  const styles = {
    pokedexContainer: {
      display: "flex",
      justifyContent: "space-evenly",
    },
    leftContainer: {
      display: "flex",
      flexDirection: "column",
      borderRadius: 5,
      padding: 10,
      backgroundColor: "#D4D4D4",
      border: "1px solid #A4A4A4",
      margin: 20,
      height: 225,
      width: "40%",
    },
    rightContainer: {
      display: "flex",
      flexDirection: "column",
      borderRadius: 5,
      padding: 20,
      backgroundColor: "#D4D4D4",
      border: "1px solid #A4A4A4",
      margin: 20,
      width: "40%",
    },
    header: {
      textAlign: "center",
    },
    buttonSpacing: {
      marginTop: 10,
    },
    error: {
      color: "red",
      margin: 10,
    },
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const searchPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + search.toLowerCase())
      .then((res) => {
        setError("");
        const data = res.data;
        console.log(data);
        setPokemon(data);
      })
      .catch((err) => {
        console.log(err);
        setError("No Results");
      });
  };

  return (
    <div style={styles.pokedexContainer}>
      <div style={styles.leftContainer}>
        <h1 style={styles.header}>Pokedex</h1>
        <input
          className="form-control form-control-lg"
          placeholder="Enter a Pokemon"
          onChange={handleSearch}
        ></input>
        <button
          className="btn btn-primary"
          style={styles.buttonSpacing}
          onClick={searchPokemon}
        >
          Search
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </div>
      {pokemon && (
        <div style={styles.rightContainer}>
          <PokemonData pokemon={pokemon} />
        </div>
      )}
    </div>
  );
};

export default Pokedex;
