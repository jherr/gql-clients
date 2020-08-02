import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function App() {
  const { data } = useQuery(gql`
    query {
      pokemon {
        name
        type
      }
    }
  `);
  const [addPokemonMutation, { data: mutationResponse }] = useMutation(gql`
    mutation($name: String!, $type: String!) {
      addPokemon(name: $name, type: $type)
    }
  `);

  const addPokemon = () => {
    addPokemonMutation({
      variables: {
        name: "Jacksoniansaur",
        type: "Fire",
      },
    });
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
      <div>{JSON.stringify((data || {}).pokemon)}</div>
      <h1>Mutation</h1>
      <div>{JSON.stringify(mutationResponse)}</div>
      <button onClick={addPokemon}>Add Pokemon</button>
    </div>
  );
}

export default () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
