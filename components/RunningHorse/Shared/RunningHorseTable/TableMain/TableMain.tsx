import React from "react";
import { StyleSheet, View } from "react-native";
import { SearchRunningHorsesQuery } from "../../../../../apollo/graphql";
import { TableHeader } from "./Shared";
import { getWakuNumberStyleArray, WakuNumberStyle } from "../../../../constants";
import { useTotalIndexDesc } from "../../../../../hooks/useTotalIndexOrder";
import { TableRowList } from "./Shared/TableRow";

type RecieveProps = {
  searchRunningHorses: SearchRunningHorsesQuery["searchRunningHorses"];
};
type ContainerCreatedProps = {
  sortedSearchRunningHorses: SearchRunningHorsesQuery["searchRunningHorses"];
  wakuNumberStyleArray: WakuNumberStyle[];
  handleTotalIndexDesc: () => void;
};
type Props = Omit<RecieveProps & ContainerCreatedProps, "searchRunningHorses">;

const Component: React.FC<Props> = ({
  sortedSearchRunningHorses,
  handleTotalIndexDesc,
  wakuNumberStyleArray,
  ..._props
}) => (
  <View style={styles.container}>
    <TableHeader handleTotalIndexDesc={handleTotalIndexDesc} />
    <TableRowList sortedSearchRunningHorses={sortedSearchRunningHorses} wakuNumberStyleArray={wakuNumberStyleArray} />
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

const Container: React.FC<RecieveProps> = ({ searchRunningHorses, ...props }) => {
  const { sortedSearchRunningHorses, handleTotalIndexDesc } = useTotalIndexDesc(searchRunningHorses);
  const dataLength = sortedSearchRunningHorses.length;
  const wakuNumberStyleArray = getWakuNumberStyleArray(dataLength);

  return (
    <Component
      wakuNumberStyleArray={wakuNumberStyleArray}
      handleTotalIndexDesc={handleTotalIndexDesc}
      sortedSearchRunningHorses={sortedSearchRunningHorses}
      {...props}
    />
  );
};

export default Container;
