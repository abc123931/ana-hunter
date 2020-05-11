import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BlogStackParamList } from "../types";
import { BlogScreen } from "../../screens";

const Stack = createStackNavigator<BlogStackParamList>();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Blog" component={BlogScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);
