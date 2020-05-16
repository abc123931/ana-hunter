import React from "react";
import { StyleSheet, View } from "react-native";
import SkeletonContent from "react-native-skeleton-content";

type RecieveProps = {};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const datas = Array(10)
  .fill(0)
  .map((_, i) => i + 1);

const Component: React.FC<Props> = ({ ..._props }) => (
  <View style={styles.container}>
    {datas.map((data) => (
      <SkeletonContent
        key={data}
        isLoading={true}
        layout={[{ key: "list", width: 350, height: 20, marginBottom: 6, marginTop: 16 }]}
      ></SkeletonContent>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
