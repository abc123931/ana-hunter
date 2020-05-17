import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { BlogLoading } from "./BlogLoading";

type RecieveProps = {};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const datas = Array(5)
  .fill(0)
  .map((_, i) => i + 1);

const Component: React.FC<Props> = ({ ..._props }) => (
  <FlatList
    style={styles.container}
    data={datas}
    renderItem={() => <BlogLoading />}
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
