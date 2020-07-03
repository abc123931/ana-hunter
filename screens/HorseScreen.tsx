import React from "react";
import { SafeAreaView, Text } from "react-native";
import { SafeAreaViewStyle } from "../styles";

type RecieveProps = {};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ ..._props }) => (
  <SafeAreaView style={SafeAreaViewStyle.container}>
    <Text>馬詳細画面</Text>
  </SafeAreaView>
);

export const HorseScreen: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};
