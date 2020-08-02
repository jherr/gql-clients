import React from "react";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

function PokemonType({ pokemon }) {
  return <div>{pokemon.type}</div>;
}

export default createFragmentContainer(PokemonType, {
  pokemon: graphql`
    fragment PokemonType_pokemon on Pokemon {
      type
    }
  `,
});
