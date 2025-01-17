import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeStackParamList } from "../../navigation/types";
import { RaceTitle } from "../RaceTitle";
import { PageNav } from "../PageNav";
import { RACE_NAVIGATIONS, RACE_NAVIGATION_ID } from "../PageNav/constants";
import { HorseNumTable } from "./HorseNumTable";
import { RotationTable } from "./RotationTable";

type RecieveProps = {};
type ContainerCreatedProps = {
  raceName: string;
  nav: string;
  setNav: (id: string) => void;
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ raceName, nav, setNav, ..._props }) => (
  <ScrollView style={styles.container}>
    <RaceTitle raceName={raceName} supplement="補足が入ります" />
    <PageNav nav={nav} setNav={setNav} navigations={RACE_NAVIGATIONS} />
    {nav === RACE_NAVIGATION_ID.horseNumTrend && <HorseNumTable raceName={raceName} />}
    {nav === RACE_NAVIGATION_ID.rotation && <RotationTable raceName={raceName} />}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 100,
    height: 100,
  },
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  const [nav, setNav] = React.useState<string>("horseNumTrend");
  const route = useRoute<RouteProp<HomeStackParamList, "Race">>();
  const { raceName } = route.params;
  return <Component raceName={raceName} nav={nav} setNav={setNav} {...props} />;
};

export default Container;
