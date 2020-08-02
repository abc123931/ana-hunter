import React from "react";
import { SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import { BlogList } from "../components/Blog";
import { TabScreenSafeAreaViewStyle } from "../styles";

function Component() {
  return (
    <SafeAreaView style={TabScreenSafeAreaViewStyle.container}>
      <Header />
      <BlogList />
    </SafeAreaView>
  );
}

export function BlogScreen({ ...props }) {
  return <Component {...props} />;
}
