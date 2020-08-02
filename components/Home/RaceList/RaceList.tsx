import React, { useCallback } from "react";
import { Text, ScrollView, RefreshControl } from "react-native";
import { GetWeekendRacesQuery } from "../../../apollo/graphql";
import { RaceCard } from "./RaceCard";
import { HomeRaceCardLoading } from "../../Loading";
import { useGetWeekendRaces, mutateGetWeekendRaces } from "../../../hooks/swr/useGetWeekendRaces";

type RecieveProps = {};
type ContainerCreatedProps = {
  races: GetWeekendRacesQuery["races"];
  refreshing: boolean;
  onRefresh: () => void;
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ races, refreshing, onRefresh, ..._props }) => (
  <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
    {races.map((race, index) => (
      <RaceCard key={index} data={race} />
    ))}
  </ScrollView>
);

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const { data, error } = useGetWeekendRaces();
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    mutateGetWeekendRaces();
    setRefreshing(false);
  }, []);
  if (!data) return <HomeRaceCardLoading />;
  if (error) return <Text>エラーが発生しました。</Text>;
  if (data?.races.length === 0) return <Text>レースが見つかりませんでした。</Text>;
  return <Component races={data.races} refreshing={refreshing} onRefresh={onRefresh} {...props} />;
};

export default Container;
