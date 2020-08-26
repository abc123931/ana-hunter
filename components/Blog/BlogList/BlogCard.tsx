import React, { useCallback } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { defaultImage } from "./constants";
import { useNavigation } from "@react-navigation/native";
import { BlogStackParamList } from "../../../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useFragment, graphql } from "react-relay/hooks";
import { BlogCard_blog$key, BlogCard_blog } from "../../../types/__generated__/BlogCard_blog.graphql";

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
  blog: BlogCard_blog$key;
};
type ContainerCreatedProps = {
  data: BlogCard_blog;
  onPress: (uri: string) => void;
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "blog">;

function Component({ data, onPress, ..._props }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(data.url)}>
      <View style={styles.titleBlogerName}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.blogerName}>穴ハンター</Text>
      </View>
      <Image style={styles.image} source={{ uri: data.image ?? defaultImage }} />
    </TouchableOpacity>
  );
}

export function BlogCard({ blog, ...props }: RecieveProps) {
  const navigation = useNavigation<StackNavigationProp<BlogStackParamList, "BlogWeb">>();
  const data = useFragment(
    graphql`
      fragment BlogCard_blog on blogs {
        url
        image
        title
      }
    `,
    blog
  );
  const onPress = useCallback(
    (uri: string) => {
      navigation.navigate("BlogWeb", { uri });
    },
    [navigation]
  );
  return <Component data={data} onPress={onPress} {...props} />;
}
