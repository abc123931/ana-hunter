import React from "react";
import { StyleSheet, View, Image } from "react-native";

type RecieveProps = {
  uri: string;
  style: any;
};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ uri, style, ..._props }) => (
  <View style={{ ...styles.container, ...style }}>
    <Image style={styles.image} source={{ uri }} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "#ef8f39",
    padding: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
