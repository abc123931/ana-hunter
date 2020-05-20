import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const RACE_NAVIGATIONS = [
  {
    id: "horseNumTrend",
    label: "馬番傾向",
    icon: <MaterialIcons name="format-list-numbered" size={24} color="gray" />,
    selectedIcon: <MaterialIcons name="format-list-numbered" size={24} color="black" />,
  },
  {
    id: "rotation",
    label: "ローテーション",
    icon: <Entypo name="cycle" size={24} color="gray" />,
    selectedIcon: <Entypo name="cycle" size={24} color="black" />,
  },
  {
    id: "stepRace",
    label: "過去レース",
    icon: <MaterialIcons name="format-list-numbered" size={24} color="gray" />,
    selectedIcon: <MaterialIcons name="format-list-numbered" size={24} color="black" />,
  },
  {
    id: "jockey",
    label: "騎手成績",
    icon: <MaterialIcons name="format-list-numbered" size={24} color="gray" />,
    selectedIcon: <MaterialIcons name="format-list-numbered" size={24} color="black" />,
  },
] as const;
