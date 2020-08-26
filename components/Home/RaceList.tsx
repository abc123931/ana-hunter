import React from "react";
import { LoadMoreFn } from "react-relay/lib/relay-experimental/useLoadMoreFunction";
import { Text, RefreshControl, FlatList } from "react-native";
import { graphql, useLazyLoadQuery, fetchQuery, useRelayEnvironment, usePaginationFragment } from "react-relay/hooks";
import { RaceCard } from "./RaceCard";
import { RaceList_Query } from "../../types/__generated__/RaceList_Query.graphql";
import { RacesPaginationQuery } from "../../types/__generated__/RacesPaginationQuery.graphql";
import { RaceList_races$key, RaceList_races } from "../../types/__generated__/RaceList_races.graphql";

type ContainerCreatedProps = {
  races: RaceList_races["races_connection"]["edges"];
  loadNext: LoadMoreFn;
  hasNext: boolean;
  refreshing: boolean;
  onRefresh: () => void;
};
type Props = Omit<ContainerCreatedProps, "">;

function Component({ races, loadNext, hasNext, refreshing, onRefresh, ..._props }: Props) {
  return (
    <FlatList
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      data={races}
      renderItem={({ item }) => <RaceCard race={item.node} />}
      keyExtractor={(_item, index) => `${index}`}
      onEndReached={() => {
        if (hasNext) loadNext(10);
      }}
      onEndReachedThreshold={3}
    />
  );
}

const query = graphql`
  query RaceList_Query {
    ...RaceList_races
  }
`;
const fragment = graphql`
  fragment RaceList_races on query_root
    @argumentDefinitions(first: { type: "Int", defaultValue: 10 }, after: { type: "String" })
    @refetchable(queryName: "RacesPaginationQuery") {
    races_connection(
      where: { race_grade: { _gte: 1, _lte: 3 }, realtimehorses: { race_key: { _is_null: false } } }
      order_by: { race_day: desc, race_grade: asc }
      first: $first
      after: $after
    ) @connection(key: "Query_races_connection") {
      edges {
        node {
          ...RaceCard_race
        }
      }
    }
  }
`;
const variables = {};

export function RaceList({ ...props }) {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const environment = useRelayEnvironment();
  const queryData = useLazyLoadQuery<RaceList_Query>(query, variables);
  const { data, loadNext, hasNext } = usePaginationFragment<RacesPaginationQuery, RaceList_races$key>(
    fragment,
    queryData
  );
  const onRefresh = () => {
    fetchQuery(environment, query, variables).subscribe({
      start: () => setRefreshing(true),
      complete: () => setRefreshing(false),
    });
  };

  if (data?.races_connection.edges.length === 0) return <Text>レースが見つかりませんでした。</Text>;
  return (
    <Component
      races={data?.races_connection.edges}
      loadNext={loadNext}
      hasNext={hasNext}
      refreshing={refreshing}
      onRefresh={onRefresh}
      {...props}
    />
  );
}
