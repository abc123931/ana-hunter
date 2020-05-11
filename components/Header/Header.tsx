import React from "react";
import { StyleSheet, View, Text } from "react-native";

type RecieveProps = {};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ ..._props }) => (
  <View style={styles.container}>
    <Text>ヘッダーだよ</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
