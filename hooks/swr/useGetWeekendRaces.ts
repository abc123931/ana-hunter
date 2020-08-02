import { print } from "graphql";
import { GetWeekendRacesQuery, GetWeekendRacesDocument } from "../../apollo/graphql";
import { mutate, ConfigInterface } from "swr";
import { useSWRW } from "../../lib/fetcher";

export function mutateGetWeekendRaces() {
  mutate([print(GetWeekendRacesDocument)]);
}

export function useGetWeekendRaces(options?: ConfigInterface) {
  return useSWRW<GetWeekendRacesQuery>(print(GetWeekendRacesDocument), {
    options,
  });
}
