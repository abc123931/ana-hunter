/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BlogList_blogs = {
    readonly blogs_connection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"BlogCard_blog">;
            };
        }>;
    };
    readonly " $refType": "BlogList_blogs";
};
export type BlogList_blogs$data = BlogList_blogs;
export type BlogList_blogs$key = {
    readonly " $data"?: BlogList_blogs$data;
    readonly " $fragmentRefs": FragmentRefs<"BlogList_blogs">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "blogs_connection"
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
      "operation": require('./BlogsPaginationQuery.graphql.ts')
    }
  },
  "name": "BlogList_blogs",
  "selections": [
    {
      "alias": "blogs_connection",
      "args": [
        {
          "kind": "Literal",
          "name": "order_by",
          "value": {
            "updatedAt": "desc"
          }
        }
      ],
      "concreteType": "blogsConnection",
      "kind": "LinkedField",
      "name": "__Query_blogs_connection_connection",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "BlogCard_blog"
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
      "storageKey": "__Query_blogs_connection_connection(order_by:{\"updatedAt\":\"desc\"})"
    }
  ],
  "type": "query_root",
  "abstractKey": null
};
})();
(node as any).hash = 'b5fcb8cace47257c18bddcca12c0e554';
export default node;
