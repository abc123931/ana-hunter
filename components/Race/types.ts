export type RaceTableColumn = {
  label: string;
  style: {
    flex: number;
  };
};

export type RaceTableColumns = {
  firstColumn: RaceTableColumn;
  firstCount: RaceTableColumn;
  secondCount: RaceTableColumn;
  thirdCount: RaceTableColumn;
  otherCount: RaceTableColumn;
  winRate: RaceTableColumn;
  showRate: RaceTableColumn;
};
