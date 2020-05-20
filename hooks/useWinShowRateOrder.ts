import { useState, useCallback } from "react";
import { SearchHorseNumCountQuery, useSearchHorseNumCountQuery } from "../apollo/graphql";
import { ApolloError } from "@apollo/client";

type Response = {
  loading?: boolean;
  error?: ApolloError;
  sortedSearchRaceHorseNumCount?: SearchHorseNumCountQuery["searchRaceHorseNumCount"];
  handleWinRateDesc?: () => void;
  handleShowRateDesc?: () => void;
};

// 馬番傾向のデータを取得してソートできる状態にして返す
export function useWinShowRateOrder(raceName: string): Response {
  const [winRateDesc, setWinRateDesc] = useState<boolean>(false);
  const [showRateDesc, setShowRateDesc] = useState<boolean>(false);
  const handleWinRateDesc = useCallback(() => {
    setWinRateDesc(!winRateDesc);
    setShowRateDesc(false);
  }, [winRateDesc]);

  const handleShowRateDesc = useCallback(() => {
    setWinRateDesc(false);
    setShowRateDesc(!showRateDesc);
  }, [showRateDesc]);

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
      return a.horseNum - b.horseNum;
    }
  });

  return { sortedSearchRaceHorseNumCount, handleWinRateDesc, handleShowRateDesc };
}
