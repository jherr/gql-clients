/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PokemonType_pokemon$ref: FragmentReference;
declare export opaque type PokemonType_pokemon$fragmentType: PokemonType_pokemon$ref;
export type PokemonType_pokemon = {|
  +type: string,
  +$refType: PokemonType_pokemon$ref,
|};
export type PokemonType_pokemon$data = PokemonType_pokemon;
export type PokemonType_pokemon$key = {
  +$data?: PokemonType_pokemon$data,
  +$fragmentRefs: PokemonType_pokemon$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokemonType_pokemon",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    }
  ],
  "type": "Pokemon",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '2a74317d64bd6a8df19c226cb7755afc';

module.exports = node;
