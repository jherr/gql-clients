/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PokemonName_pokemon$ref = any;
type PokemonType_pokemon$ref = any;
export type PokemonQueryVariables = {||};
export type PokemonQueryResponse = {|
  +pokemon: {|
    +$fragmentRefs: PokemonName_pokemon$ref & PokemonType_pokemon$ref
  |}
|};
export type PokemonQuery = {|
  variables: PokemonQueryVariables,
  response: PokemonQueryResponse,
|};
*/


/*
query PokemonQuery {
  pokemon {
    ...PokemonName_pokemon
    ...PokemonType_pokemon
  }
}

fragment PokemonName_pokemon on Pokemon {
  name
}

fragment PokemonType_pokemon on Pokemon {
  type
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PokemonQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Pokemon",
        "kind": "LinkedField",
        "name": "pokemon",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PokemonName_pokemon"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PokemonType_pokemon"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PokemonQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Pokemon",
        "kind": "LinkedField",
        "name": "pokemon",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "type",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b23f6643719995b7304e560f651aa9f8",
    "id": null,
    "metadata": {},
    "name": "PokemonQuery",
    "operationKind": "query",
    "text": "query PokemonQuery {\n  pokemon {\n    ...PokemonName_pokemon\n    ...PokemonType_pokemon\n  }\n}\n\nfragment PokemonName_pokemon on Pokemon {\n  name\n}\n\nfragment PokemonType_pokemon on Pokemon {\n  type\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '3164caebbfde7da80a0ebcc777e70158';

module.exports = node;
