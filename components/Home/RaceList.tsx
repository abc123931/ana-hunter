import React from "react";
import { Text, ScrollView, RefreshControl } from "react-native";
import { graphql, useLazyLoadQuery, fetchQuery, useRelayEnvironment } from "react-relay/hooks";
import { RaceCard } from "./RaceCard";
import { RaceList_Query } from "../../types/__generated__/RaceList_Query.graphql";

type ContainerCreatedProps = {
  races: RaceList_Query["response"]["races_connection"]["edges"];
  refreshing: boolean;
  onRefresh: () => void;
};
type Props = Omit<ContainerCreatedProps, "">;

const query = graphql`
  query RaceList_Query {
    races_connection(
      where: { race_grade: { _gte: 1, _lte: 3 }, realtimehorses: { race_key: { _is_null: false } } }
      order_by: { race_day: desc, race_grade: asc }
      first: 10
    ) {
      edges {
        node {
          raceKey: race_key
          raceName: race_name
          raceNameCommon: race_name_common
          raceGrade: race_grade
          raceDay: race_day
          raceGrade: race_grade
        }
      }
    }
  }
`;
const variables = {};

function Component({ races, refreshing, onRefresh, ..._props }: Props) {
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      {races.map((race, index) => (
        <RaceCard key={index} data={race.node} />
      ))}
    </ScrollView>
  );
}

export function RaceList({ ...props }) {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const environment = useRelayEnvironment();
  const data = useLazyLoadQuery<RaceList_Query>(query, variables);
  const onRefresh = () => {
    fetchQuery(environment, query, variables).subscribe({
      start: () => setRefreshing(true),
      complete: () => setRefreshing(false),
    });
  };
  data.races_connection.edges;

  if (data?.races_connection.edges.length === 0) return <Text>レースが見つかりませんでした。</Text>;
  return <Component races={data?.races_connection.edges} refreshing={refreshing} onRefresh={onRefresh} {...props} />;
}
