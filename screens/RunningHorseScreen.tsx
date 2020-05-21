import React from "react";
import { SafeAreaView } from "react-native";
import { RunningHorse } from "../components/RunningHorse";
import { SafeAreaViewStyle } from "../styles";

type RecieveProps = {};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ ..._props }) => (
  <SafeAreaView style={SafeAreaViewStyle.container}>
    <RunningHorse />
  </SafeAreaView>
);

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
