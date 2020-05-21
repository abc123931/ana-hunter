import React from "react";
import { SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import { BlogList } from "../components/Blog";
import { SafeAreaViewStyle } from "../styles";

type RecieveProps = {};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ ..._props }) => (
  <SafeAreaView style={SafeAreaViewStyle.container}>
    <Header />
    <BlogList />
  </SafeAreaView>
);

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
