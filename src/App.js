import React from "react";
import Pokedex from "./components/Pokedex";

function App() {
  const styles = {
    container: {
      backgroundColor: "#D60A2D",
      height: "100vh"
    }
  };
  return (
    <div className="App" style={styles.container} >
      <Pokedex />
    </div >
  );
}

export default App;
