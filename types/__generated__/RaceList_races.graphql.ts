/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RaceList_races = {
    readonly races_connection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"RaceCard_race">;
            };
        }>;
    };
    readonly " $refType": "RaceList_races";
};
export type RaceList_races$data = RaceList_races;
export type RaceList_races$key = {
    readonly " $data"?: RaceList_races$data;
    readonly " $fragmentRefs": FragmentRefs<"RaceList_races">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "races_connection"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "after"
    },
    {
      "defaultValue": 1,
      "kind": "LocalArgument",
      "name": "first"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./RacesPaginationQuery.graphql.ts')
    }
  },
  "name": "RaceList_races",
  "selections": [
    {
      "alias": "races_connection",
      "args": [
        {
          "kind": "Literal",
          "name": "order_by",
          "value": {
            "race_day": "desc",
            "race_grade": "asc"
          }
        },
        {
          "kind": "Literal",
          "name": "where",
          "value": {
            "race_grade": {
              "_gte": 1,
              "_lte": 3
            },
            "realtimehorses": {
              "race_key": {
                "_is_null": false
              }
            }
          }
        }
      ],
      "concreteType": "racesConnection",
      "kind": "LinkedField",
      "name": "__Query_races_connection_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "racesEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "races",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "RaceCard_race"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "__Query_races_connection_connection(order_by:{\"race_day\":\"desc\",\"race_grade\":\"asc\"},where:{\"race_grade\":{\"_gte\":1,\"_lte\":3},\"realtimehorses\":{\"race_key\":{\"_is_null\":false}}})"
    }
  ],
  "type": "query_root",
  "abstractKey": null
};
})();
(node as any).hash = 'bc561cdd62c036685f1d31f88486dd02';
export default node;
