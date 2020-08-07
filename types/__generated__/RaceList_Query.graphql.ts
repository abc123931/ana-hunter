/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type RaceList_QueryVariables = {};
export type RaceList_QueryResponse = {
    readonly races_connection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly raceKey: string;
                readonly raceName: string | null;
                readonly raceNameCommon: string | null;
                readonly raceGrade: number | null;
                readonly raceDay: string | null;
            };
        }>;
    };
};
export type RaceList_Query = {
    readonly response: RaceList_QueryResponse;
    readonly variables: RaceList_QueryVariables;
};



/*
query RaceList_Query {
  races_connection(where: {race_grade: {_gte: 1, _lte: 3}, realtimehorses: {race_key: {_is_null: false}}}, order_by: {race_day: desc, race_grade: asc}, first: 10) {
    edges {
      node {
        raceKey: race_key
        raceName: race_name
        raceNameCommon: race_name_common
        raceGrade: race_grade
        raceDay: race_day
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
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
],
v1 = {
  "alias": "raceKey",
  "args": null,
  "kind": "ScalarField",
  "name": "race_key",
  "storageKey": null
},
v2 = {
  "alias": "raceName",
  "args": null,
  "kind": "ScalarField",
  "name": "race_name",
  "storageKey": null
},
v3 = {
  "alias": "raceNameCommon",
  "args": null,
  "kind": "ScalarField",
  "name": "race_name_common",
  "storageKey": null
},
v4 = {
  "alias": "raceGrade",
  "args": null,
  "kind": "ScalarField",
  "name": "race_grade",
  "storageKey": null
},
v5 = {
  "alias": "raceDay",
  "args": null,
  "kind": "ScalarField",
  "name": "race_day",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "races_connection(first:10,order_by:{\"race_day\":\"desc\",\"race_grade\":\"asc\"},where:{\"race_grade\":{\"_gte\":1,\"_lte\":3},\"realtimehorses\":{\"race_key\":{\"_is_null\":false}}})"
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "races_connection(first:10,order_by:{\"race_day\":\"desc\",\"race_grade\":\"asc\"},where:{\"race_grade\":{\"_gte\":1,\"_lte\":3},\"realtimehorses\":{\"race_key\":{\"_is_null\":false}}})"
      }
    ]
  },
  "params": {
    "cacheID": "365ca0c5b5bebe95fb6b548560dbe19a",
    "id": null,
    "metadata": {},
    "name": "RaceList_Query",
    "operationKind": "query",
    "text": "query RaceList_Query {\n  races_connection(where: {race_grade: {_gte: 1, _lte: 3}, realtimehorses: {race_key: {_is_null: false}}}, order_by: {race_day: desc, race_grade: asc}, first: 10) {\n    edges {\n      node {\n        raceKey: race_key\n        raceName: race_name\n        raceNameCommon: race_name_common\n        raceGrade: race_grade\n        raceDay: race_day\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '93bae90a1cb386963b8f0d233fa4e0bf';
export default node;
