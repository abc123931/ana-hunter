/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BlogCard_blog = {
    readonly url: string;
    readonly image: string | null;
    readonly title: string;
    readonly " $refType": "BlogCard_blog";
};
export type BlogCard_blog$data = BlogCard_blog;
export type BlogCard_blog$key = {
    readonly " $data"?: BlogCard_blog$data;
    readonly " $fragmentRefs": FragmentRefs<"BlogCard_blog">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BlogCard_blog",
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
    }
  ],
  "type": "blogs",
  "abstractKey": null
};
(node as any).hash = 'b583c77db1ec66a16be9bf4fe7502a45';
export default node;
