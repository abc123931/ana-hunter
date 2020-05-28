import React from "react";
import { SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import { TabScreenSafeAreaViewStyle } from "../styles";
import { SearchPage } from "../components/Horse/SearchPage";

type RecieveProps = {};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ ..._props }) => (
  <SafeAreaView style={TabScreenSafeAreaViewStyle.container}>
    <Header />
    <SearchPage />
  </SafeAreaView>
);

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
