import React from "react";
import { SafeAreaView } from "react-native";
import { Race } from "../components/Race";
import { SafeAreaViewStyle } from "../styles";

type RecieveProps = {};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ ..._props }) => (
  <SafeAreaView style={SafeAreaViewStyle.container}>
    <Race />
  </SafeAreaView>
);

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
