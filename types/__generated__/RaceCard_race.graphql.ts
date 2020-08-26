/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RaceCard_race = {
    readonly raceKey: string;
    readonly raceName: string | null;
    readonly raceNameCommon: string | null;
    readonly raceGrade: number | null;
    readonly raceDay: string | null;
    readonly " $refType": "RaceCard_race";
};
export type RaceCard_race$data = RaceCard_race;
export type RaceCard_race$key = {
    readonly " $data"?: RaceCard_race$data;
    readonly " $fragmentRefs": FragmentRefs<"RaceCard_race">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RaceCard_race",
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
    }
  ],
  "type": "races",
  "abstractKey": null
};
(node as any).hash = '493685ceb90897d48ec39f9667623e12';
export default node;
