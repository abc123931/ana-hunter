import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeStackParamList } from "../../navigation/types";
import { RaceDayInfo, RaceTitle, RunningHorseTable } from "./Shared";

type RecieveProps = {};
type ContainerCreatedProps = {
  raceName: string;
  raceDay: string;
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ raceName, raceDay, ..._props }) => (
  <ScrollView style={styles.container}>
    <RaceDayInfo raceDay={raceDay} />
    <RaceTitle raceName={raceName} />
    <View style={styles.horizon}>
      <Text style={styles.horizonText}>出走馬情報</Text>
    </View>
    <RunningHorseTable raceName={raceName} raceDay={raceDay} />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 100,
    height: 100,
  },
  horizon: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#f6f6f9",
  },
  horizonText: {
    fontSize: 18,
    color: "gray",
  },
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  const route = useRoute<RouteProp<HomeStackParamList, "RunningHorse">>();
  const { raceName, raceDay } = route.params;
  return <Component raceName={raceName} raceDay={raceDay} {...props} />;
};

export default Container;
