import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { RaceTableColumns } from "../types";

type RecieveProps = {
  raceColumns: RaceTableColumns;
  handleWinRateDesc: () => void;
  handleShowRateDesc: () => void;
};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ raceColumns, handleWinRateDesc, handleShowRateDesc, ..._props }) => (
  <View style={styles.container}>
    <Text style={{ ...raceColumns.firstColumn.style, ...styles.column }}>{raceColumns.firstColumn.label}</Text>
    <Text style={{ ...raceColumns.firstCount.style, ...styles.column }}>{raceColumns.firstCount.label}</Text>
    <Text style={{ ...raceColumns.secondCount.style, ...styles.column }}>{raceColumns.secondCount.label}</Text>
    <Text style={{ ...raceColumns.thirdCount.style, ...styles.column }}>{raceColumns.thirdCount.label}</Text>
    <Text style={{ ...raceColumns.otherCount.style, ...styles.column }}>{raceColumns.otherCount.label}</Text>
    <TouchableOpacity style={{ flex: raceColumns.winRate.style.flex }} onPress={handleWinRateDesc}>
      <Text style={styles.column}>{raceColumns.winRate.label}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ flex: raceColumns.showRate.style.flex }} onPress={handleShowRateDesc}>
      <Text style={styles.column}>{raceColumns.showRate.label}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(153, 153, 153)",
    paddingBottom: 5,
    paddingTop: 20,
  },
  column: {
    textAlign: "center",
    fontSize: 12,
  },
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
