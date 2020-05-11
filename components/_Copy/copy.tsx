import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

type RecieveProps = {};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ ..._props }) => <SafeAreaView style={styles.container}></SafeAreaView>;

const styles = StyleSheet.create({
  container: {},
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;