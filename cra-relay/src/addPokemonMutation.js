import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";

const mutation = graphql`
  mutation addPokemonMutation($name: String!, $type: String!) {
    addPokemon(name: $name, type: $type)
  }
`;

export default function addPokemonMutation(environment, name, type) {
  return new Promise((resolve) => {
    const variables = {
      name,
      type,
    };

    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        resolve(response);
      },
      onError: (err) => console.error(err),
    });
  });
}
