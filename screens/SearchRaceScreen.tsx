import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Header } from "../components/Header";
import { TabScreenSafeAreaViewStyle } from "../styles";

type RecieveProps = {};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ ..._props }) => (
  <SafeAreaView style={TabScreenSafeAreaViewStyle.container}>
    <Header />
    <Text>レース画面</Text>
  </SafeAreaView>
);

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
