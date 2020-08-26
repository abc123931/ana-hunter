/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BlogList_QueryVariables = {};
export type BlogList_QueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"BlogList_blogs">;
};
export type BlogList_Query = {
    readonly response: BlogList_QueryResponse;
    readonly variables: BlogList_QueryVariables;
};



/*
query BlogList_Query {
  ...BlogList_blogs
}

fragment BlogCard_blog on blogs {
  url
  image
  title
}

fragment BlogList_blogs on query_root {
  blogs_connection(first: 1, order_by: {updatedAt: desc}) {
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
    "kind": "Literal",
    "name": "first",
    "value": 1
  },
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BlogList_Query",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "BlogList_blogs"
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BlogList_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
        "storageKey": "blogs_connection(first:1,order_by:{\"updatedAt\":\"desc\"})"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
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
    "cacheID": "7ffd8d05a62a574e63a4680b767b5c95",
    "id": null,
    "metadata": {},
    "name": "BlogList_Query",
    "operationKind": "query",
    "text": "query BlogList_Query {\n  ...BlogList_blogs\n}\n\nfragment BlogCard_blog on blogs {\n  url\n  image\n  title\n}\n\nfragment BlogList_blogs on query_root {\n  blogs_connection(first: 1, order_by: {updatedAt: desc}) {\n    edges {\n      node {\n        ...BlogCard_blog\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd34b99e7a362cf79fba7e77052798307';
export default node;
