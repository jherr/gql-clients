import React from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

function PokemonName({ pokemon }) {
  return <div>{pokemon.name}</div>;
}

export default createFragmentContainer(PokemonName, {
  pokemon: graphql`
    fragment PokemonName_pokemon on Pokemon {
      name
    }
  `,
});
