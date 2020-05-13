import React from "react";
import { StyleSheet, View } from "react-native";
import SkeletonContent from "react-native-skeleton-content";

type RecieveProps = {};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ ..._props }) => (
  <View style={styles.container}>
    <SkeletonContent
      containerStyle={styles.header}
      isLoading={true}
      layout={[
        { key: "name", width: 220, height: 20, marginBottom: 6, margin: 16 },
        { key: "supplement", width: 180, height: 10, marginTop: 6, marginBottom: 16, marginLeft: 16 },
      ]}
    ></SkeletonContent>
    <SkeletonContent
      containerStyle={styles.image}
      isLoading={true}
      layout={[{ key: "image", width: 1000, height: 200, marginBottom: 16 }]}
    ></SkeletonContent>
    <SkeletonContent
      containerStyle={styles.footer}
      isLoading={true}
      layout={[
        { key: "leftButton", width: 50, height: 50 },
        { key: "rightButton", width: 50, height: 50 },
      ]}
    ></SkeletonContent>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  image: {},
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
