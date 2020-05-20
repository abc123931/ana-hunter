import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

type RecieveProps = {
  handleWinRateDesc: () => void;
  handleShowRateDesc: () => void;
};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ handleWinRateDesc, handleShowRateDesc, ..._props }) => (
  <View style={styles.container}>
    <Text style={styles.column}>馬番</Text>
    <Text style={styles.column}>１着</Text>
    <Text style={styles.column}>２着</Text>
    <Text style={styles.column}>３着</Text>
    <Text style={styles.column}>それ以外</Text>
    <TouchableOpacity style={{ flex: 1 }} onPress={handleWinRateDesc}>
      <Text style={styles.column}>勝率</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ flex: 1 }} onPress={handleShowRateDesc}>
      <Text style={styles.column}>複勝率</Text>
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
    flex: 1,
    textAlign: "center",
    fontSize: 12,
  },
});

export const TableHeader: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};
