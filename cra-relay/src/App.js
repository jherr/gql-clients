import React from "react";
import environment from "./createRelayEnvironment";

import PokemonQuery from "./PokemonQuery";
import addPokemonMutation from "./addPokemonMutation";

function App() {
  const [mutationResponse, mutationResponseSet] = React.useState(null);

  const addPokemon = async () => {
    mutationResponseSet(
      await addPokemonMutation(environment, "Jackasaurus", "Wind")
    );
  };

  return (
    <div
      style={{
        margin: "auto",
        width: 800,
        fontSize: "xx-large",
        padding: "1em",
      }}
    >
      <h1>Query</h1>
      <div>
        <PokemonQuery />
      </div>
      <h1>Mutation</h1>
      <div>{JSON.stringify(mutationResponse)}</div>
      <button onClick={addPokemon}>Add Pokemon</button>
    </div>
  );
}

export default App;
