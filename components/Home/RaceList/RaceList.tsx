import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { useGetWeekendRacesQuery, GetWeekendRacesQuery } from "../../../apollo/graphql";
import { RaceCard } from "./RaceCard";

type RecieveProps = {};
type ContainerCreatedProps = {
  races: GetWeekendRacesQuery["races"];
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ races, ..._props }) => (
  <FlatList
    style={styles.container}
    data={races}
    renderItem={({ item }) => <RaceCard data={item} />}
    keyExtractor={(_item, index) => `${index}`}
  />
);

const styles = StyleSheet.create({
  container: {},
});

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  const { data, loading, error } = useGetWeekendRacesQuery();
  if (loading) return <Text>...Loading</Text>;
  if (error) return <Text>エラーが発生しました。</Text>;
  if (!data || data?.races.length === 0) return <Text>レースが見つかりませんでした。</Text>;
  return <Component races={data.races} {...props} />;
};

export default Container;
