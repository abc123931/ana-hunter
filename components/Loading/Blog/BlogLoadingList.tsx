import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { BlogLoading } from "./BlogLoading";

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});

const datas = Array(10)
  .fill(0)
  .map((_, i) => i + 1);

function Component({ ..._props }) {
  return (
    <FlatList
      style={styles.container}
      data={datas}
      renderItem={() => <BlogLoading />}
      keyExtractor={(_item, index) => `${index}`}
    />
  );
}

export function BlogLoadingList({ ...props }) {
  return <Component {...props} />;
}
