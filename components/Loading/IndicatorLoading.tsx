import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

type RecieveProps = {
  style: {
    marginTop: number;
    size: number;
  };
};
type ContainerCreatedProps = {
  marginTop: number;
  size: number;
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "style">;

const Component: React.FC<Props> = ({ marginTop, size, ..._props }) => (
  <View style={{ ...styles.container, marginTop }}>
    <ActivityIndicator size={size} color="#0000ff" />
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

const Container: React.FC<RecieveProps> = ({ style, ...props }) => {
  const { marginTop, size } = style;
  return <Component marginTop={marginTop} size={size} {...props} />;
};

export default Container;
