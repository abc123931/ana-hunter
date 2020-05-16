import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { RunningHorse } from "../components/RunningHorse";

type RecieveProps = {};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ ..._props }) => (
  <SafeAreaView style={styles.container}>
    <RunningHorse />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
