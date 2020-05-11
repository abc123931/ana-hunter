import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HorseStackParamList } from "../types";
import { HorseScreen } from "../../screens";

const Stack = createStackNavigator<HorseStackParamList>();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Horse" component={HorseScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);
