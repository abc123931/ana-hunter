import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackParamList } from "../types";
import { HomeScreen, RunningHorseScreen } from "../../screens";

const Stack = createStackNavigator<HomeStackParamList>();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="RunningHorse" options={{ title: "出走馬情報" }} component={RunningHorseScreen} />
  </Stack.Navigator>
);
