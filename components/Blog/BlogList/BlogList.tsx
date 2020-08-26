import React from "react";
import { Text, RefreshControl, FlatList } from "react-native";
import { graphql, useLazyLoadQuery, fetchQuery, useRelayEnvironment, usePaginationFragment } from "react-relay/hooks";
import { BlogCard } from "./BlogCard";
import { BlogList_Query } from "../../../types/__generated__/BlogList_Query.graphql";
import { BlogsPaginationQuery } from "../../../types/__generated__/BlogsPaginationQuery.graphql";
import { BlogList_blogs$key, BlogList_blogs } from "../../../types/__generated__/BlogList_blogs.graphql";
import { LoadMoreFn } from "react-relay/lib/relay-experimental/useLoadMoreFunction";

type ContainerCreatedProps = {
  blogs: BlogList_blogs["blogs_connection"]["edges"];
  loadNext: LoadMoreFn;
  hasNext: boolean;
  refreshing: boolean;
  onRefresh: () => void;
};
type Props = Omit<ContainerCreatedProps, "">;

const LIMIT = 10;

const query = graphql`
  query BlogList_Query {
    ...BlogList_blogs
  }
`;
const variables = {};

function Component({ blogs, loadNext, hasNext, refreshing, onRefresh, ..._props }: Props) {
  return (
    <FlatList
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      data={blogs}
      renderItem={({ item }) => <BlogCard blog={item.node} />}
      keyExtractor={(_item, index) => `${index}`}
      onEndReached={() => {
        if (hasNext) loadNext(LIMIT);
      }}
      onEndReachedThreshold={0}
    />
  );
}

export function BlogList({ ...props }) {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const environment = useRelayEnvironment();
  const queryData = useLazyLoadQuery<BlogList_Query>(query, variables);
  const { data, loadNext, hasNext } = usePaginationFragment<BlogsPaginationQuery, BlogList_blogs$key>(
    graphql`
      fragment BlogList_blogs on query_root
        @argumentDefinitions(first: { type: "Int", defaultValue: LIMIT }, after: { type: "String" })
        @refetchable(queryName: "BlogsPaginationQuery") {
        blogs_connection(first: $first, after: $after, order_by: { updatedAt: desc })
          @connection(key: "Query_blogs_connection") {
          edges {
            node {
              ...BlogCard_blog
            }
          }
        }
      }
    `,
    queryData
  );
  const onRefresh = () => {
    fetchQuery(environment, query, variables).subscribe({
      start: () => setRefreshing(true),
      complete: () => setRefreshing(false),
    });
  };

  if (!data.blogs_connection.edges || data.blogs_connection.edges.length === 0)
    return <Text>ブログがありませんでした</Text>;

  return (
    <Component
      blogs={data.blogs_connection.edges}
      loadNext={loadNext}
      hasNext={hasNext}
      refreshing={refreshing}
      onRefresh={onRefresh}
      {...props}
    />
  );
}
