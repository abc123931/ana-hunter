import { useState, useCallback } from "react";
import { SearchRunningHorsesQuery } from "../apollo/graphql";

type Response = {
  sortedSearchRunningHorses: SearchRunningHorsesQuery["searchRunningHorses"];
  handleTotalIndexDesc: () => void;
};

export function useTotalIndexDesc(searchRunningHorses: SearchRunningHorsesQuery["searchRunningHorses"]): Response {
  const [totalIndexDesc, setTotalIndexDesc] = useState<boolean>(false);
  const handleTotalIndexDesc = useCallback(() => {
    setTotalIndexDesc(!totalIndexDesc);
  }, [totalIndexDesc]);

  // sliceをはさまないとうまくいかない
  // https://stackoverflow.com/questions/53420055/error-while-sorting-array-of-objects-cannot-assign-to-read-only-property-2-of/53420326
  const sortedSearchRunningHorses = searchRunningHorses.slice().sort(function (a, b) {
    if (totalIndexDesc) {
      return b.newTotalIndex - a.newTotalIndex;
    } else {
      return a.horseNum - b.horseNum;
    }
  });

  return { sortedSearchRunningHorses, handleTotalIndexDesc };
}
