import React from "react";
import { Text, SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import { RaceList } from "../components/Home/RaceList";
import { HomeRaceCardLoading } from "../components/Loading";
import { TabScreenSafeAreaViewStyle } from "../styles";
import { ErrorBoundary } from "../components/Boundary/boundary";

function Component() {
  return (
    <SafeAreaView style={TabScreenSafeAreaViewStyle.container}>
      <Header />
      <ErrorBoundary fallback={<Text>エラーが発生しました。</Text>}>
        <React.Suspense fallback={<HomeRaceCardLoading />}>
          <RaceList />
        </React.Suspense>
      </ErrorBoundary>
    </SafeAreaView>
  );
}

export function HomeScreen() {
  return <Component />;
}
