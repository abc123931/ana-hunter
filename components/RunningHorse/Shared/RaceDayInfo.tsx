import React from "react";
import { StyleSheet, View, Text } from "react-native";
import dayjs from "dayjs";

type RecieveProps = {
  raceDay: string;
};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ raceDay, ..._props }) => (
  <View style={styles.container}>
    {/* TODO: 2019年12月31日(日) 中山 11R この表記にする */}
    <Text style={styles.title}>{dayjs(raceDay).format("YYYY年MM月DD日（ddd）")}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    padding: 16,
    borderBottomColor: "rgb(219, 219, 219)",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
  },
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
