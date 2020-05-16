import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { RouteProp } from "@react-navigation/native";
import { BlogStackParamList } from "../navigation/types";

type RecieveProps = {
  route: RouteProp<BlogStackParamList, "BlogWeb">;
};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ route, ..._props }) => (
  <SafeAreaView style={styles.container}>
    <WebView source={{ uri: route.params.uri }} startInLoadingState />
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
