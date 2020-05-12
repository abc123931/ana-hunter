import React from "react";
import { StyleSheet, View, Text } from "react-native";

type RecieveProps = {};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ ..._props }) => (
  <View style={styles.container}>
    {/* TODO: SVGが読み込めない。。*/}
    <Text style={styles.text}>穴ハンター</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    top: 0,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(219, 219, 219, 1)",
  },
  text: {
    fontSize: 20,
    fontStyle: "italic",
  },
  image: {
    backgroundColor: "red",
  },
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
