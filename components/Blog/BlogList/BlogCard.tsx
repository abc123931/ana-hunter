import React, { useCallback } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { GetBlogsQuery } from "../../../apollo/graphql";
import { defaultImage } from "./constants";
import { useNavigation } from "@react-navigation/native";
import { BlogStackParamList } from "../../../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
  },
  titleBlogerName: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "75%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  blogerName: {
    color: "gray",
    paddingLeft: 4,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 4,
  },
});

type RecieveProps = {
  blog: GetBlogsQuery["blogs"][number];
};
type ContainerCreatedProps = {
  onPress: (uri: string) => void;
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

function Component({ blog, onPress, ..._props }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(blog.url)}>
      <View style={styles.titleBlogerName}>
        <Text style={styles.title}>{blog.title}</Text>
        <Text style={styles.blogerName}>穴ハンター</Text>
      </View>
      <Image style={styles.image} source={{ uri: blog.image ?? defaultImage }} />
    </TouchableOpacity>
  );
}

export function BlogCard({ ...props }: RecieveProps) {
  const navigation = useNavigation<StackNavigationProp<BlogStackParamList, "BlogWeb">>();
  const onPress = useCallback(
    (uri: string) => {
      navigation.navigate("BlogWeb", { uri });
    },
    [navigation]
  );
  return <Component onPress={onPress} {...props} />;
}
