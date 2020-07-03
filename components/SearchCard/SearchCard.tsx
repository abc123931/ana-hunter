import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { CircleImage } from "../CircleImage";
import { defaultImage, SearchCardData } from "./types";

type RecieveProps = {
  style?: any;
  data: SearchCardData;
  genre: string;
  onPress?: () => void;
};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ data, style, onPress, ..._props }) => (
  <TouchableOpacity style={{ ...styles.container, ...style }} onPress={onPress}>
    <CircleImage uri={defaultImage} style={styles.image} />
    <View style={styles.nameSupplementContainer}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.supplement}>{data.supplement}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 8,
    paddingBottom: 8,
  },
  image: {
    width: 54,
    height: 54,
    marginRight: 12,
  },
  nameSupplementContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  name: {
    fontWeight: "600",
  },
  supplement: {
    fontWeight: "400",
    fontSize: 14,
    color: "rgb(153, 153, 153)",
  },
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
