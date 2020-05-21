import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TableLoading } from "../../Loading";
import { SearchRotationCountQuery } from "../../../apollo/graphql";
import { TableRow } from "./TableRow";
import { TableHeader } from "../TableHeader";
import { ROTATION_COLUMNS } from "./constants";
import { useRotationCountWinShowRateOrder } from "../../../hooks/useRotationCountWinShowRateOrder";

type RecieveProps = {
  raceName: string;
};
type ContainerCreatedProps = {
  searchRotationCount: SearchRotationCountQuery["searchRotationCount"];
  handleWinRateDesc: () => void;
  handleShowRateDesc: () => void;
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "raceName">;

const Component: React.FC<Props> = ({ searchRotationCount, handleWinRateDesc, handleShowRateDesc, ..._props }) => (
  <View style={styles.container}>
    <TableHeader
      raceColumns={ROTATION_COLUMNS}
      handleWinRateDesc={handleWinRateDesc}
      handleShowRateDesc={handleShowRateDesc}
    />
    {searchRotationCount.map((data, index) => (
      <TableRow key={index} data={data} backgroundColor={index % 2 !== 0 ? "#f5e6e6" : ""} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

const Container: React.FC<RecieveProps> = ({ raceName, ...props }) => {
  const {
    sortedSearchRotationCount,
    loading,
    error,
    handleWinRateDesc,
    handleShowRateDesc,
  } = useRotationCountWinShowRateOrder(raceName);
  if (loading) return <TableLoading />;
  if (error) return <Text>エラーが発生しました</Text>;
  if (!sortedSearchRotationCount || sortedSearchRotationCount.length === 0 || !handleWinRateDesc || !handleShowRateDesc)
    return <Text>ローテーションのデータがみつかりませんでした</Text>;
  return (
    <Component
      searchRotationCount={sortedSearchRotationCount}
      handleWinRateDesc={handleWinRateDesc}
      handleShowRateDesc={handleShowRateDesc}
      {...props}
    />
  );
};

export default Container;
