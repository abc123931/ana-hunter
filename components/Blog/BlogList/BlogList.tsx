import React from "react";
import { Text, FlatList } from "react-native";
import { useGetBlogsQuery, GetBlogsQuery } from "../../../apollo/graphql";
import { BlogCard } from "./BlogCard";

type RecieveProps = {};
type ContainerCreatedProps = {
  blogs: GetBlogsQuery["blogs"];
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ blogs, ..._props }) => (
  <FlatList
    data={blogs}
    renderItem={({ item }) => <BlogCard blog={item} />}
    keyExtractor={(_item, index) => `${index}`}
  />
);

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  const { data, loading, error } = useGetBlogsQuery();

  if (loading) return <Text>...Loading</Text>;
  if (error || !data) return <Text>エラーが発生しました</Text>;
  if (!data.blogs || data.blogs.length === 0) return <Text>ブログがありませんでした</Text>;

  return <Component blogs={data.blogs} {...props} />;
};

export default Container;
