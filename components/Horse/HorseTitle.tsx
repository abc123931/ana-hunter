import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { CircleImage } from "../CircleImage";
import { DUMMY_HORSE_IMAGE } from "../constants";

type RecieveProps = {
  horseName: string;
  sexAge: string;
  supplement: string;
};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ horseName, sexAge, supplement, ..._props }) => (
  <View style={styles.container}>
    <CircleImage style={styles.image} uri={DUMMY_HORSE_IMAGE} />
    <View style={styles.titleSupplementContainer}>
      <Text style={styles.title}>{sexAge + horseName}</Text>
      <Text style={styles.supplement}>{supplement}</Text>
    </View>
  </View>
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

export const HorseTitle: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};
