import { SearchHorseNumCountQuery, useSearchHorseNumCountQuery } from "../apollo/graphql";
import { ApolloError } from "@apollo/client";
import { useWinShowRateOrder } from "./useWinShowRateOrder";

type Response = {
  loading?: boolean;
  error?: ApolloError;
  sortedSearchRaceHorseNumCount?: SearchHorseNumCountQuery["searchRaceHorseNumCount"];
  handleWinRateDesc?: () => void;
  handleShowRateDesc?: () => void;
};

// 馬番傾向のデータを取得してソートできる状態にして返す
export function useHorseNumCountWinShowRateOrder(raceName: string): Response {
  const { winRateDesc, showRateDesc, handleWinRateDesc, handleShowRateDesc } = useWinShowRateOrder();
  const { data, loading, error } = useSearchHorseNumCountQuery({ variables: { name: raceName } });
  if (loading) return { loading };
  if (error) return { error };
  if (!data || data.searchRaceHorseNumCount.length === 0) return { sortedSearchRaceHorseNumCount: [] };

  const sortedSearchRaceHorseNumCount = data.searchRaceHorseNumCount.slice().sort(function (a, b) {
    if (winRateDesc) {
      return Math.round((b.firstCount / b.totalCount) * 100) - Math.round((a.firstCount / a.totalCount) * 100);
    } else if (showRateDesc) {
      return (
        Math.round(((b.firstCount + b.secondCount + b.thirdCount) / b.totalCount) * 100) -
        Math.round(((a.firstCount + a.secondCount + a.thirdCount) / a.totalCount) * 100)
      );
    } else {
      return 1;
    }
  });

  return { sortedSearchRaceHorseNumCount, handleWinRateDesc, handleShowRateDesc };
}
