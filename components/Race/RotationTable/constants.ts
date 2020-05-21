import { RaceTableColumns } from "../types";

export const ROTATION_COLUMNS: RaceTableColumns = {
  firstColumn: {
    label: "レース名",
    style: {
      flex: 3,
    },
  },
  firstCount: {
    label: "１着",
    style: {
      flex: 1,
    },
  },
  secondCount: {
    label: "２着",
    style: {
      flex: 1,
    },
  },
  thirdCount: {
    label: "３着",
    style: {
      flex: 1,
    },
  },
  otherCount: {
    label: "他",
    style: {
      flex: 1,
    },
  },
  winRate: {
    label: "勝率",
    style: {
      flex: 1,
    },
  },
  showRate: {
    label: "複勝率",
    style: {
      flex: 1.5,
    },
  },
} as const;
