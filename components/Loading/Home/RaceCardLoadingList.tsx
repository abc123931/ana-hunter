import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { RaceCardLoading } from "./Shared";

type RecieveProps = {};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ ..._props }) => (
  <FlatList
    style={styles.container}
    data={[0, 1]}
    renderItem={() => <RaceCardLoading />}
    keyExtractor={(_item, index) => `${index}`}
  />
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
