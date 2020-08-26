import React from "react";
import { Text, SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import { BlogList } from "../components/Blog";
import { ErrorBoundary } from "../components/Boundary/boundary";
import { BlogLoadingList } from "../components/Loading";
import { TabScreenSafeAreaViewStyle } from "../styles";

function Component() {
  return (
    <SafeAreaView style={TabScreenSafeAreaViewStyle.container}>
      <Header />
      <ErrorBoundary fallback={<Text>エラーが発生しました</Text>}>
        <React.Suspense fallback={<BlogLoadingList />}>
          <BlogList />
        </React.Suspense>
      </ErrorBoundary>
    </SafeAreaView>
  );
}

export function BlogScreen({ ...props }) {
  return <Component {...props} />;
}
