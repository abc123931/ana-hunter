import React, { useCallback } from "react";
import { Text, ScrollView, RefreshControl } from "react-native";
import { useGetBlogsQuery, GetBlogsQuery } from "../../../apollo/graphql";
import { BlogCard } from "./BlogCard";
import { BlogLoading } from "../../Loading";

type RecieveProps = {};
type ContainerCreatedProps = {
  blogs: GetBlogsQuery["blogs"];
  refreshing: boolean;
  onRefresh: () => void;
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ blogs, refreshing, onRefresh, ..._props }) => (
  <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
    {blogs.map((blog, index) => (
      <BlogCard key={index} blog={blog} />
    ))}
  </ScrollView>
);

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const { data, loading, error, refetch } = useGetBlogsQuery();
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  if (loading) return <BlogLoading />;
  if (error || !data) return <Text>エラーが発生しました</Text>;
  if (!data.blogs || data.blogs.length === 0) return <Text>ブログがありませんでした</Text>;

  return <Component blogs={data.blogs} refreshing={refreshing} onRefresh={onRefresh} {...props} />;
};

export default Container;
