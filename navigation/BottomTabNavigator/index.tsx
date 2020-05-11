import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { HomeStackNavigator, BlogStackNavigator, HorseStackNavigator, RaceStackNavigator } from "../StackNavigator";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = "";

        color = focused ? "black" : "gray";
        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Blog") {
          iconName = "book-open";
        } else if (route.name === "Horse") {
          iconName = "horse";
        } else if (route.name === "Race") {
          iconName = "trophy";
        }

        // You can return any component that you like here!
        return <FontAwesome5 name={iconName} size={size} color={color} />;
      },
      tabBarLabel: ({ focused, color }) => {
        let labelName = "";

        color = focused ? "black" : "gray";
        if (route.name === "Home") {
          labelName = "HOME";
        } else if (route.name === "Blog") {
          labelName = "ブログ";
        } else if (route.name === "Horse") {
          labelName = "うま";
        } else if (route.name === "Race") {
          labelName = "レース";
        }

        // You can return any component that you like here!
        return <Text style={{ color }}>{labelName}</Text>;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeStackNavigator}></Tab.Screen>
    <Tab.Screen name="Blog" component={BlogStackNavigator}></Tab.Screen>
    <Tab.Screen name="Horse" component={HorseStackNavigator}></Tab.Screen>
    <Tab.Screen name="Race" component={RaceStackNavigator}></Tab.Screen>
  </Tab.Navigator>
);
