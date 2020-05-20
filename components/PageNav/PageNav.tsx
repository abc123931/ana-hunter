import React from "react";
import { StyleSheet, View } from "react-native";
import { NavButton } from "./NavButton";

type RecieveProps = {
  navigations: readonly {
    id: string;
    label: string;
    icon?: JSX.Element;
    selectedIcon?: JSX.Element;
  }[];
  nav: string;
  setNav: (id: string) => void;
};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ nav, setNav, navigations, ..._props }) => (
  <View style={styles.container}>
    {navigations.map((navigation, index) => (
      <NavButton
        key={index}
        active={navigation.id === nav}
        action={() => setNav(navigation.id)}
        navigation={navigation}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    paddingTop: 16,
  },
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
