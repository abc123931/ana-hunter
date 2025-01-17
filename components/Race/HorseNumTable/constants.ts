import { RaceTableColumns } from "../types";

export const HORSE_NUM_COLUMNS: RaceTableColumns = {
  firstColumn: {
    label: "馬番",
    style: {
      flex: 1,
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
      flex: 1,
    },
  },
} as const;
