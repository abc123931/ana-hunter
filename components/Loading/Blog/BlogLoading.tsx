import React from "react";
import { StyleSheet, View } from "react-native";
import SkeletonContent from "react-native-skeleton-content";

type RecieveProps = {};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ ..._props }) => (
  <View style={styles.container}>
    <SkeletonContent
      containerStyle={styles.titleBloggerName}
      isLoading={true}
      layout={[
        { key: "title", width: 230, height: 20, marginBottom: 6, marginTop: 16 },
        { key: "bloggerName", width: 100, height: 20, marginBottom: 6, marginTop: 16 },
      ]}
    ></SkeletonContent>
    <SkeletonContent
      isLoading={true}
      layout={[{ key: "image", width: 75, height: 75, marginTop: 10, marginLeft: 20 }]}
    ></SkeletonContent>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 15,
  },
  titleBloggerName: {
    justifyContent: "space-between",
  },
});

export const BlogLoading: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};
