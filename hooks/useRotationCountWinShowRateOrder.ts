import { SearchRotationCountQuery, useSearchRotationCountQuery } from "../apollo/graphql";
import { ApolloError } from "@apollo/client";
import { useWinShowRateOrder } from "./useWinShowRateOrder";

type Response = {
  loading?: boolean;
  error?: ApolloError;
  sortedSearchRotationCount?: SearchRotationCountQuery["searchRotationCount"];
  handleWinRateDesc?: () => void;
  handleShowRateDesc?: () => void;
};

// ローテーション傾向のデータを取得してソートできる状態にして返す
export function useRotationCountWinShowRateOrder(raceName: string): Response {
  const { winRateDesc, showRateDesc, handleWinRateDesc, handleShowRateDesc } = useWinShowRateOrder();
  const { data, loading, error } = useSearchRotationCountQuery({ variables: { name: raceName } });
  if (loading) return { loading };
  if (error) return { error };
  if (!data || data.searchRotationCount.length === 0) return { sortedSearchRotationCount: [] };

  const sortedSearchRotationCount = data.searchRotationCount.slice().sort(function (a, b) {
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

  return { sortedSearchRotationCount, handleWinRateDesc, handleShowRateDesc };
}
