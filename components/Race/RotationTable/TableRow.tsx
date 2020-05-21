import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SearchRotationCountQuery } from "../../../apollo/graphql";

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
    <Text numberOfLines={1} style={styles.raceName}>
      {data.lagCommonRaceName ?? "その他"}
    </Text>
    <Text style={styles.column}>{data.firstCount}</Text>
    <Text style={styles.column}>{data.secondCount}</Text>
    <Text style={styles.column}>{data.thirdCount}</Text>
    <Text style={styles.column}>{data.outCount}</Text>
    <Text style={styles.column}>{winRate}%</Text>
    <Text style={{ ...styles.column, flex: 1.5 }}>{showRate}%</Text>
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
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
  raceName: {
    flex: 3,
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
