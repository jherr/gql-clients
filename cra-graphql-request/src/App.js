import React from "react";
import { request } from "graphql-request";

function App() {
  const [data, dataSet] = React.useState(null);
  const [mutationResponse, mutationResponseSet] = React.useState(null);

  React.useEffect(() => {
    request(
      "http://localhost:4000/",
      "{ pokemon { name type } }"
    ).then((data) => dataSet(data.pokemon));
  }, []);

  const addPokemon = () => {
    request(
      "http://localhost:4000/",
      `mutation ($name: String!, $type: String!) {
          addPokemon(name: $name, type: $type)
        }`,
      {
        name: "Jackosaur",
        type: "Earth",
      }
    ).then((data) => mutationResponseSet(data.addPokemon));
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
      <div>{JSON.stringify(data)}</div>
      <h1>Mutation</h1>
      <div>{JSON.stringify(mutationResponse)}</div>
      <button onClick={addPokemon}>Add Pokemon</button>
    </div>
  );
}

export default App;
