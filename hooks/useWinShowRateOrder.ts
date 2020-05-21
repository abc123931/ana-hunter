import { useState, useCallback } from "react";

type Response = {
  winRateDesc: boolean;
  showRateDesc: boolean;
  handleWinRateDesc: () => void;
  handleShowRateDesc: () => void;
};

export function useWinShowRateOrder(): Response {
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

  return { winRateDesc, showRateDesc, handleWinRateDesc, handleShowRateDesc };
}
