import React from "react";
import { StyleSheet, View, Text } from "react-native";

type RecieveProps = {};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ ..._props }) => (
  <View style={styles.container}>
    <Text>Hello</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

export const CopyComponent: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};
