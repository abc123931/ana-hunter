import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSearchHorsesQuery, SearchHorsesQuery } from "../../apollo/graphql";
import { IndicatorLoading } from "../Loading";
import { SearchCard } from "../SearchCard";
import { SearchCardData } from "../SearchCard/types";
import { getSex, getAge } from "../../lib/util";

type RecieveProps = {
  search: string;
};
type ContainerCreatedProps = {
  datas: SearchHorsesQuery["horses"];
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "search">;

function searchCardDataFactory(data: SearchHorsesQuery["horses"][number]): SearchCardData {
  return {
    id: data.horseID,
    name: data.horseName ?? "",
    supplement: data.birthday && data.sexCode ? getSex(data.sexCode) + getAge(data.birthday) : "",
  };
}

const Component: React.FC<Props> = ({ datas, ..._props }) => (
  <View style={styles.container}>
    {datas.map((data, index) => (
      <SearchCard key={index} style={styles.searchCard} data={searchCardDataFactory(data)} genre="horse" />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {},
  searchCard: {
    paddingLeft: 16,
  },
});

export const HorseList: React.FC<RecieveProps> = ({ search, ...props }) => {
  const { data, loading, error } = useSearchHorsesQuery({ variables: { like: `%${search}%` } });
  if (loading) return <IndicatorLoading style={{ marginTop: 20, size: 32 }} />;
  if (error) return <Text>エラーが発生しました</Text>;
  if (!data?.horses || data.horses.length === 0) return <Text>検索した馬は見つかりませんでした</Text>;
  return <Component datas={data.horses} {...props} />;
};
