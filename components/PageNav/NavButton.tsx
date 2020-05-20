import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type TextStyle = {
  fontWeight: "bold" | "normal";
};

type RecieveProps = {
  active: boolean;
  navigation: {
    id: string;
    label: string;
    icon?: JSX.Element;
    selectedIcon?: JSX.Element;
  };
  action: () => void;
};
type ContainerCreatedProps = {
  textStyle: TextStyle;
  borderBottom: {
    borderBottomWidth: number;
    borderBottomColor: string;
  };
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ active, action, navigation, textStyle, borderBottom, ..._props }) => (
  <TouchableOpacity style={{ ...styles.container, ...borderBottom }} onPress={action}>
    {navigation.icon && active && navigation.selectedIcon}
    {navigation.icon && !active && navigation.icon}
    <Text style={{ ...styles.text, ...textStyle }}>{navigation.label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
  },
  text: {
    fontSize: 12,
  },
});

export const NavButton: React.FC<RecieveProps> = ({ active, ...props }) => {
  const textStyle: TextStyle = { fontWeight: active ? "bold" : "normal" };
  const borderBottom = {
    borderBottomWidth: 2,
    borderBottomColor: active ? "black" : "transparent",
  };
  return <Component active={active} textStyle={textStyle} borderBottom={borderBottom} {...props} />;
};
