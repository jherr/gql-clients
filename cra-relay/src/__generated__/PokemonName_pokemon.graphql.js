/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PokemonName_pokemon$ref: FragmentReference;
declare export opaque type PokemonName_pokemon$fragmentType: PokemonName_pokemon$ref;
export type PokemonName_pokemon = {|
  +name: string,
  +$refType: PokemonName_pokemon$ref,
|};
export type PokemonName_pokemon$data = PokemonName_pokemon;
export type PokemonName_pokemon$key = {
  +$data?: PokemonName_pokemon$data,
  +$fragmentRefs: PokemonName_pokemon$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokemonName_pokemon",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Pokemon",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'b53669e0def5b2f38a6d9627cac2ec10';

module.exports = node;
