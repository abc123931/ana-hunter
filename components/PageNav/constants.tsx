import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const RACE_NAVIGATION_ID = {
  horseNumTrend: "horseNumTrend",
  rotation: "rotation",
  pastRace: "pastRace",
  jockey: "jockey",
} as const;

export const RACE_NAVIGATIONS = [
  {
    id: RACE_NAVIGATION_ID.horseNumTrend,
    label: "馬番傾向",
    icon: <MaterialIcons name="format-list-numbered" size={24} color="gray" />,
    selectedIcon: <MaterialIcons name="format-list-numbered" size={24} color="black" />,
  },
  {
    id: RACE_NAVIGATION_ID.rotation,
    label: "ローテーション",
    icon: <Entypo name="cycle" size={24} color="gray" />,
    selectedIcon: <Entypo name="cycle" size={24} color="black" />,
  },
  {
    id: RACE_NAVIGATION_ID.pastRace,
    label: "過去レース",
    icon: <MaterialIcons name="format-list-numbered" size={24} color="gray" />,
    selectedIcon: <MaterialIcons name="format-list-numbered" size={24} color="black" />,
  },
  {
    id: RACE_NAVIGATION_ID.jockey,
    label: "騎手成績",
    icon: <MaterialIcons name="format-list-numbered" size={24} color="gray" />,
    selectedIcon: <MaterialIcons name="format-list-numbered" size={24} color="black" />,
  },
] as const;

export const HORSE_NAVIGATION_ID = {
  horseNumTrend: "horseNumTrend",
  rotation: "rotation",
  pastRace: "pastRace",
  jockey: "jockey",
} as const;

export const HORSE_NAVIGATIONS = [
  {
    id: RACE_NAVIGATION_ID.horseNumTrend,
    label: "馬番傾向",
    icon: <MaterialIcons name="format-list-numbered" size={24} color="gray" />,
    selectedIcon: <MaterialIcons name="format-list-numbered" size={24} color="black" />,
  },
  {
    id: RACE_NAVIGATION_ID.rotation,
    label: "ローテーション",
    icon: <Entypo name="cycle" size={24} color="gray" />,
    selectedIcon: <Entypo name="cycle" size={24} color="black" />,
  },
  {
    id: RACE_NAVIGATION_ID.pastRace,
    label: "過去レース",
    icon: <MaterialIcons name="format-list-numbered" size={24} color="gray" />,
    selectedIcon: <MaterialIcons name="format-list-numbered" size={24} color="black" />,
  },
  {
    id: RACE_NAVIGATION_ID.jockey,
    label: "騎手成績",
    icon: <MaterialIcons name="format-list-numbered" size={24} color="gray" />,
    selectedIcon: <MaterialIcons name="format-list-numbered" size={24} color="black" />,
  },
] as const;
