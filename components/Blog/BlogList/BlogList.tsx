import React, { useCallback } from "react";
import { Text, ScrollView, RefreshControl } from "react-native";
import { GetBlogsQuery } from "../../../apollo/graphql";
import { BlogCard } from "./BlogCard";
import { BlogLoading } from "../../Loading";
import { useGetBlogs } from "../../../hooks/swr/blog/useGetBlogs";

type ContainerCreatedProps = {
  blogs: GetBlogsQuery["blogs"];
  refreshing: boolean;
  onRefresh: () => void;
};
type Props = Omit<ContainerCreatedProps, "">;

function Component({ blogs, refreshing, onRefresh, ..._props }: Props) {
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </ScrollView>
  );
}

export function BlogList({ ...props }) {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const { data, error, revalidate } = useGetBlogs();
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await revalidate();
    setRefreshing(false);
  }, [revalidate]);

  if (!data) return <BlogLoading />;
  if (error) return <Text>エラーが発生しました</Text>;
  if (!data.blogs || data.blogs.length === 0) return <Text>ブログがありませんでした</Text>;

  return <Component blogs={data.blogs} refreshing={refreshing} onRefresh={onRefresh} {...props} />;
}
