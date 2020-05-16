import React from "react";
import { SearchRunningHorsesQuery } from "../../../../../../../apollo/graphql";
import { TableRow } from "./TableRow";
import { WakuNumberStyle } from "../../../../../../constants";

type RecieveProps = {
  sortedSearchRunningHorses: SearchRunningHorsesQuery["searchRunningHorses"];
  wakuNumberStyleArray: WakuNumberStyle[];
};
type ContainerCreatedProps = {};
type Props = Omit<RecieveProps & ContainerCreatedProps, "">;

const Component: React.FC<Props> = ({ sortedSearchRunningHorses, wakuNumberStyleArray, ..._props }) => (
  <>
    {sortedSearchRunningHorses.map((data) => (
      <TableRow
        key={data.horseNum}
        sortedSearchRunningHorse={data}
        wakuNumberStyle={wakuNumberStyleArray[data.horseNum - 1]}
      />
    ))}
  </>
);

const Container: React.FC<RecieveProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
