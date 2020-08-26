/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RaceList_QueryVariables = {};
export type RaceList_QueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"RaceList_races">;
};
export type RaceList_Query = {
    readonly response: RaceList_QueryResponse;
    readonly variables: RaceList_QueryVariables;
};



/*
query RaceList_Query {
  ...RaceList_races
}

fragment RaceCard_race on races {
  raceKey: race_key
  raceName: race_name
  raceNameCommon: race_name_common
  raceGrade: race_grade
  raceDay: race_day
}

fragment RaceList_races on query_root {
  races_connection(where: {race_grade: {_gte: 1, _lte: 3}, realtimehorses: {race_key: {_is_null: false}}}, order_by: {race_day: desc, race_grade: asc}, first: 1) {
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
    "kind": "Literal",
    "name": "first",
    "value": 1
  },
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RaceList_Query",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RaceList_races"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RaceList_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
        "storageKey": "races_connection(first:1,order_by:{\"race_day\":\"desc\",\"race_grade\":\"asc\"},where:{\"race_grade\":{\"_gte\":1,\"_lte\":3},\"realtimehorses\":{\"race_key\":{\"_is_null\":false}}})"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
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
    "cacheID": "cdf6fa43ac5f7cbf1c465b7fbd37b994",
    "id": null,
    "metadata": {},
    "name": "RaceList_Query",
    "operationKind": "query",
    "text": "query RaceList_Query {\n  ...RaceList_races\n}\n\nfragment RaceCard_race on races {\n  raceKey: race_key\n  raceName: race_name\n  raceNameCommon: race_name_common\n  raceGrade: race_grade\n  raceDay: race_day\n}\n\nfragment RaceList_races on query_root {\n  races_connection(where: {race_grade: {_gte: 1, _lte: 3}, realtimehorses: {race_key: {_is_null: false}}}, order_by: {race_day: desc, race_grade: asc}, first: 1) {\n    edges {\n      node {\n        ...RaceCard_race\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '2b72564421bc3dd038249fe685b22454';
export default node;
