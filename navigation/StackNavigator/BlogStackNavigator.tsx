import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BlogStackParamList } from "../types";
import { BlogScreen, BlogWebScreen } from "../../screens";

const Stack = createStackNavigator<BlogStackParamList>();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Blog" component={BlogScreen} options={{ headerShown: false, title: "ブログ" }} />
    <Stack.Screen name="BlogWeb" component={BlogWebScreen} options={{ title: "" }} />
  </Stack.Navigator>
);
