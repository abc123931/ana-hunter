import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SearchHorseNumCountQuery } from "../../../apollo/graphql";
import { WakuNumberStyle } from "../../constants";
import { HORSE_NUM_COLUMNS } from "./constants";

type RecieveProps = {
  data: SearchHorseNumCountQuery["searchRaceHorseNumCount"][number];
  wakuNumberStyle: WakuNumberStyle;
};
type ContainerCreatedProps = {
  color: string;
  backgroundColor: string;
  winRate: number;
  showRate: number;
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "wakuNumberStyle">;

const Component: React.FC<Props> = ({ color, backgroundColor, data, winRate, showRate, ..._props }) => (
  <View style={styles.container}>
    <View style={{ ...styles.firstColumn, ...HORSE_NUM_COLUMNS.firstColumn.style, backgroundColor }}>
      <Text style={{ color, ...styles.column }}>{data.horseNum}</Text>
    </View>
    <Text style={{ ...styles.column, ...HORSE_NUM_COLUMNS.firstCount.style }}>{data.firstCount}</Text>
    <Text style={{ ...styles.column, ...HORSE_NUM_COLUMNS.firstCount.style }}>{data.secondCount}</Text>
    <Text style={{ ...styles.column, ...HORSE_NUM_COLUMNS.firstCount.style }}>{data.thirdCount}</Text>
    <Text style={{ ...styles.column, ...HORSE_NUM_COLUMNS.firstCount.style }}>{data.outCount}</Text>
    <Text style={{ ...styles.column, ...HORSE_NUM_COLUMNS.firstCount.style }}>{winRate}%</Text>
    <Text style={{ ...styles.column, ...HORSE_NUM_COLUMNS.firstCount.style }}>{showRate}%</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  firstColumn: {
    justifyContent: "center",
  },
  column: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
});

export const TableRow: React.FC<RecieveProps> = ({ data, wakuNumberStyle, ...props }) => {
  const { color, backgroundColor } = wakuNumberStyle;
  const winRate = React.useMemo(() => {
    return Math.round((data.firstCount / data.totalCount) * 100);
  }, [data.firstCount, data.totalCount]);

  const showRate = React.useMemo(() => {
    return Math.round(((data.firstCount + data.secondCount + data.thirdCount) / data.totalCount) * 100);
  }, [data.firstCount, data.secondCount, data.thirdCount, data.totalCount]);

  return (
    <Component
      data={data}
      color={color}
      backgroundColor={backgroundColor}
      winRate={winRate}
      showRate={showRate}
      {...props}
    />
  );
};
