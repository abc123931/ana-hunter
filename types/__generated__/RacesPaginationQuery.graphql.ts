/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RacesPaginationQueryVariables = {
    after?: string | null;
    first?: number | null;
};
export type RacesPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"RaceList_races">;
};
export type RacesPaginationQuery = {
    readonly response: RacesPaginationQueryResponse;
    readonly variables: RacesPaginationQueryVariables;
};



/*
query RacesPaginationQuery(
  $after: String
  $first: Int = 1
) {
  ...RaceList_races_2HEEH6
}

fragment RaceCard_race on races {
  raceKey: race_key
  raceName: race_name
  raceNameCommon: race_name_common
  raceGrade: race_grade
  raceDay: race_day
}

fragment RaceList_races_2HEEH6 on query_root {
  races_connection(where: {race_grade: {_gte: 1, _lte: 3}, realtimehorses: {race_key: {_is_null: false}}}, order_by: {race_day: desc, race_grade: asc}, first: $first, after: $after) {
    edges {
      node {
        ...RaceCard_race
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
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
v1 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v2 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v3 = [
  (v1/*: any*/),
  (v2/*: any*/),
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RacesPaginationQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "RaceList_races"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RacesPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "racesConnection",
        "kind": "LinkedField",
        "name": "races_connection",
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
                    "alias": "raceKey",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "race_key",
                    "storageKey": null
                  },
                  {
                    "alias": "raceName",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "race_name",
                    "storageKey": null
                  },
                  {
                    "alias": "raceNameCommon",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "race_name_common",
                    "storageKey": null
                  },
                  {
                    "alias": "raceGrade",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "race_grade",
                    "storageKey": null
                  },
                  {
                    "alias": "raceDay",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "race_day",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
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
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "filters": [
          "where",
          "order_by"
        ],
        "handle": "connection",
        "key": "Query_races_connection",
        "kind": "LinkedHandle",
        "name": "races_connection"
      }
    ]
  },
  "params": {
    "cacheID": "83323798309f19a20343f5b46a692935",
    "id": null,
    "metadata": {},
    "name": "RacesPaginationQuery",
    "operationKind": "query",
    "text": "query RacesPaginationQuery(\n  $after: String\n  $first: Int = 1\n) {\n  ...RaceList_races_2HEEH6\n}\n\nfragment RaceCard_race on races {\n  raceKey: race_key\n  raceName: race_name\n  raceNameCommon: race_name_common\n  raceGrade: race_grade\n  raceDay: race_day\n}\n\nfragment RaceList_races_2HEEH6 on query_root {\n  races_connection(where: {race_grade: {_gte: 1, _lte: 3}, realtimehorses: {race_key: {_is_null: false}}}, order_by: {race_day: desc, race_grade: asc}, first: $first, after: $after) {\n    edges {\n      node {\n        ...RaceCard_race\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bc561cdd62c036685f1d31f88486dd02';
export default node;
