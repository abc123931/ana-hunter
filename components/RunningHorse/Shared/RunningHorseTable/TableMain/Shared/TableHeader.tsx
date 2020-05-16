import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

type RecieveProps = {
  handleTotalIndexDesc: () => void;
};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ handleTotalIndexDesc, ..._props }) => (
  <View style={styles.container}>
    <Text style={{ ...styles.horseNum, ...styles.column }}>馬番</Text>
    <Text style={{ ...styles.runningHorse, ...styles.column }}>競走馬</Text>
    <Text style={{ ...styles.popularity, ...styles.column }}>人気</Text>
    <TouchableOpacity style={styles.index} onPress={handleTotalIndexDesc}>
      <Text style={{ ...styles.index, ...styles.column }}>指数</Text>
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
    paddingTop: 16,
  },
  column: {
    textAlign: "center",
  },
  horseNum: {
    flex: 1,
  },
  runningHorse: {
    flex: 5,
  },
  popularity: {
    flex: 1,
  },
  index: {
    flex: 1,
  },
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
