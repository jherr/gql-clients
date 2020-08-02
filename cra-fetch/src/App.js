import React from "react";

function App() {
  const [data, dataSet] = React.useState(null);
  const [mutationResponse, mutationResponseSet] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:4000/", {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: "{ pokemon { name type } }",
      }),
      method: "POST",
    })
      .then((resp) => resp.json())
      .then((data) => dataSet(data.data.pokemon));
  }, []);

  const addPokemon = () => {
    fetch("http://localhost:4000/", {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        variables: {
          name: "Jackosaur",
          type: "Earth",
        },
        query: `mutation ($name: String!, $type: String!) {
          addPokemon(name: $name, type: $type)
        }`,
      }),
      method: "POST",
    })
      .then((resp) => resp.json())
      .then((data) => mutationResponseSet(data.data.addPokemon));
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
