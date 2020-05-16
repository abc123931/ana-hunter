import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TableMain } from "./TableMain";
import { useSearchRunningHorsesQuery, SearchRunningHorsesQuery } from "../../../../apollo/graphql";
import { TableLoading } from "../../../Loading";

type RecieveProps = {
  raceName: string;
  raceDay: string;
};
type ContainerCreatedProps = {
  searchRunningHorses: SearchRunningHorsesQuery["searchRunningHorses"];
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "raceName" | "raceDay">;

const Component: React.FC<Props> = ({ searchRunningHorses, ..._props }) => (
  <View style={styles.container}>
    <TableMain searchRunningHorses={searchRunningHorses} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});

const Container: React.FC<RecieveProps> = ({ raceName, raceDay, ...props }) => {
  const { data, loading, error } = useSearchRunningHorsesQuery({ variables: { name: raceName, day: raceDay } });
  if (loading) return <TableLoading />;
  if (error) return <Text>エラーが発生しました</Text>;
  if (!data || data.searchRunningHorses.length === 0) return <Text>データが見つかりませんでした</Text>;

  return <Component searchRunningHorses={data.searchRunningHorses} {...props} />;
};

export default Container;
