import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TableRow } from "./TableRow";
import { SearchHorseNumCountQuery } from "../../../apollo/graphql";
import { getWakuNumberStyleArray, WakuNumberStyle } from "../../constants";
import { useHorseNumCountWinShowRateOrder } from "../../../hooks/useHorseNumCountWinShowRateOrder";
import { IndicatorLoading } from "../../Loading";
import { TableHeader } from "../TableHeader";
import { HORSE_NUM_COLUMNS } from "./constants";

type RecieveProps = {
  raceName: string;
};
type ContainerCreatedProps = {
  searchRaceHorseNumCount: SearchHorseNumCountQuery["searchRaceHorseNumCount"];
  wakuNumberStyleList: WakuNumberStyle[];
  handleWinRateDesc: () => void;
  handleShowRateDesc: () => void;
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "raceName">;

const Component: React.FC<Props> = ({
  searchRaceHorseNumCount,
  wakuNumberStyleList,
  handleWinRateDesc,
  handleShowRateDesc,
  ..._props
}) => (
  <View style={styles.container}>
    <TableHeader
      raceColumns={HORSE_NUM_COLUMNS}
      handleWinRateDesc={handleWinRateDesc}
      handleShowRateDesc={handleShowRateDesc}
    />
    {searchRaceHorseNumCount.map((data) => (
      <TableRow key={data.horseNum} data={data} wakuNumberStyle={wakuNumberStyleList[data.horseNum - 1]} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

const Container: React.FC<RecieveProps> = ({ raceName, ...props }) => {
  const {
    sortedSearchRaceHorseNumCount,
    loading,
    error,
    handleWinRateDesc,
    handleShowRateDesc,
  } = useHorseNumCountWinShowRateOrder(raceName);
  if (loading) return <IndicatorLoading style={{ marginTop: 32, size: 60 }} />;
  if (error) return <Text>エラーが発生しました</Text>;
  if (
    !sortedSearchRaceHorseNumCount ||
    sortedSearchRaceHorseNumCount.length === 0 ||
    !handleWinRateDesc ||
    !handleShowRateDesc
  )
    return <Text>馬番傾向のデータがみつかりませんでした</Text>;
  const wakuNumberStyleList = getWakuNumberStyleArray(sortedSearchRaceHorseNumCount.length);

  return (
    <Component
      searchRaceHorseNumCount={sortedSearchRaceHorseNumCount}
      wakuNumberStyleList={wakuNumberStyleList}
      handleWinRateDesc={handleWinRateDesc}
      handleShowRateDesc={handleShowRateDesc}
      {...props}
    />
  );
};

export default Container;
