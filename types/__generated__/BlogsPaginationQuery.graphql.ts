/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BlogsPaginationQueryVariables = {
    after?: string | null;
    first?: number | null;
};
export type BlogsPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"BlogList_blogs">;
};
export type BlogsPaginationQuery = {
    readonly response: BlogsPaginationQueryResponse;
    readonly variables: BlogsPaginationQueryVariables;
};



/*
query BlogsPaginationQuery(
  $after: String
  $first: Int = 1
) {
  ...BlogList_blogs_2HEEH6
}

fragment BlogCard_blog on blogs {
  url
  image
  title
}

fragment BlogList_blogs_2HEEH6 on query_root {
  blogs_connection(first: $first, after: $after, order_by: {updatedAt: desc}) {
    edges {
      node {
        ...BlogCard_blog
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
      "updatedAt": "desc"
    }
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BlogsPaginationQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "BlogList_blogs"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BlogsPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "blogsConnection",
        "kind": "LinkedField",
        "name": "blogs_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "blogsEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "blogs",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "image",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
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
          "order_by"
        ],
        "handle": "connection",
        "key": "Query_blogs_connection",
        "kind": "LinkedHandle",
        "name": "blogs_connection"
      }
    ]
  },
  "params": {
    "cacheID": "9f8c29f0009b21987835393392c3b4e6",
    "id": null,
    "metadata": {},
    "name": "BlogsPaginationQuery",
    "operationKind": "query",
    "text": "query BlogsPaginationQuery(\n  $after: String\n  $first: Int = 1\n) {\n  ...BlogList_blogs_2HEEH6\n}\n\nfragment BlogCard_blog on blogs {\n  url\n  image\n  title\n}\n\nfragment BlogList_blogs_2HEEH6 on query_root {\n  blogs_connection(first: $first, after: $after, order_by: {updatedAt: desc}) {\n    edges {\n      node {\n        ...BlogCard_blog\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b5fcb8cace47257c18bddcca12c0e554';
export default node;
