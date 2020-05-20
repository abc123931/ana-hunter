import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SearchRunningHorsesQuery } from "../../../../../../../apollo/graphql";
import { WakuNumberStyle } from "../../../../../../constants";
import { SearchCard } from "../../../../../../SearchCard";
import { SearchCardData } from "../../../../../../SearchCard/types";

type RecieveProps = {
  sortedSearchRunningHorse: SearchRunningHorsesQuery["searchRunningHorses"][number];
  wakuNumberStyle: WakuNumberStyle;
};
type ContainerCreatedProps = {
  searchCardData: SearchCardData;
  color: string;
  backgroundColor: string;
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "wakuNumberStyle">;

const Component: React.FC<Props> = ({
  sortedSearchRunningHorse,
  searchCardData,
  color,
  backgroundColor,
  ..._props
}) => (
  <View style={styles.container}>
    <View style={{ ...styles.horseNum, backgroundColor }}>
      <Text style={{ color, ...styles.column }}>{sortedSearchRunningHorse.horseNum}</Text>
    </View>
    <SearchCard style={styles.runningHorse} data={searchCardData} genre="horse" />
    <Text style={{ ...styles.popularity, ...styles.column }}>{sortedSearchRunningHorse.popularity}</Text>
    <Text style={{ ...styles.index, ...styles.column }}>{sortedSearchRunningHorse.newTotalIndex}</Text>
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
    textAlign: "center",
  },
  horseNum: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
  },
  runningHorse: {
    flex: 5,
    paddingLeft: 10,
  },
  popularity: {
    flex: 1,
  },
  index: {
    flex: 1,
  },
});

const TableRow: React.FC<RecieveProps> = ({ sortedSearchRunningHorse, wakuNumberStyle, ...props }) => {
  const searchCardData: SearchCardData = {
    id: "horseID",
    name: sortedSearchRunningHorse.horseName,
    supplement: "年齢とかいれる",
  };
  const { color, backgroundColor } = wakuNumberStyle;
  return (
    <Component
      sortedSearchRunningHorse={sortedSearchRunningHorse}
      searchCardData={searchCardData}
      color={color}
      backgroundColor={backgroundColor}
      {...props}
    />
  );
};

export { TableRow };
