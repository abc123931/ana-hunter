import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SearchRotationCountQuery } from "../../../apollo/graphql";
import { ROTATION_COLUMNS } from "./constants";

type RecieveProps = {
  data: SearchRotationCountQuery["searchRotationCount"][number];
  backgroundColor: string;
};
type ContainerCreatedProps = {
  winRate: number;
  showRate: number;
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "wakuNumberStyle">;

const Component: React.FC<Props> = ({ data, winRate, showRate, backgroundColor, ..._props }) => (
  <View style={{ ...styles.container, backgroundColor }}>
    <Text numberOfLines={1} style={{ ...styles.firstColumn, ...ROTATION_COLUMNS.firstColumn.style }}>
      {data.lagCommonRaceName ?? "その他"}
    </Text>
    <Text style={{ ...styles.column, ...ROTATION_COLUMNS.firstCount.style }}>{data.firstCount}</Text>
    <Text style={{ ...styles.column, ...ROTATION_COLUMNS.secondCount.style }}>{data.secondCount}</Text>
    <Text style={{ ...styles.column, ...ROTATION_COLUMNS.thirdCount.style }}>{data.thirdCount}</Text>
    <Text style={{ ...styles.column, ...ROTATION_COLUMNS.otherCount.style }}>{data.outCount}</Text>
    <Text style={{ ...styles.column, ...ROTATION_COLUMNS.winRate.style }}>{winRate}%</Text>
    <Text style={{ ...styles.column, ...ROTATION_COLUMNS.showRate.style }}>{showRate}%</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  column: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
  firstColumn: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
  },
});

export const TableRow: React.FC<RecieveProps> = ({ data, ...props }) => {
  const winRate = React.useMemo(() => {
    return Math.round((data.firstCount / data.totalCount) * 100);
  }, [data.firstCount, data.totalCount]);

  const showRate = React.useMemo(() => {
    return Math.round(((data.firstCount + data.secondCount + data.thirdCount) / data.totalCount) * 100);
  }, [data.firstCount, data.secondCount, data.thirdCount, data.totalCount]);

  return <Component data={data} winRate={winRate} showRate={showRate} {...props} />;
};
