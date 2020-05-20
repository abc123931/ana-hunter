import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { CircleImage } from "../CircleImage";
import { DUMMY_IMAGE } from "../constants";

type RecieveProps = {
  raceName: string;
  supplement: string;
};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ raceName, supplement, ..._props }) => (
  <TouchableOpacity style={styles.container}>
    <CircleImage style={styles.image} uri={DUMMY_IMAGE} />
    <View style={styles.titleSupplementContainer}>
      <Text style={styles.title}>{raceName}</Text>
      <Text style={styles.supplement}>{supplement}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: 16,
  },
  image: {
    width: 91,
    height: 91,
    marginRight: 12,
  },
  titleSupplementContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  supplement: {
    fontSize: 14,
    color: "rgb(153, 153, 153)",
  },
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
