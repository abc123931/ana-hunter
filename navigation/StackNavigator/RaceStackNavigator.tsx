import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RaceStackParamList } from "../types";
import { RaceScreen } from "../../screens";

const Stack = createStackNavigator<RaceStackParamList>();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Race" component={RaceScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);
